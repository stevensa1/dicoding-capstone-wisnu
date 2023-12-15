import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { S3Client, PutBucketCorsCommand } from '@aws-sdk/client-s3';
import mongoose from 'mongoose';
import https from 'https';
import fs from 'fs';
// import path from 'path';

import S3Routes from './routes/S3Routes.js';
import UserRoutes from './routes/UserRoutes.js';
import PartnerRoutes from './routes/PartnerRoutes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('[MongoDB] Database connected successfully');
    })
    .catch((e) => {
        console.error('[MongoDB] Database connection failed');
        throw new Error(e);
    });

export const S3 = new S3Client({
    region: 'auto',
    endpoint: process.env.R2_S3_ENDPOINT_URL,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
});

const addCors = S3.send(
    new PutBucketCorsCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        CORSConfiguration: {
            CORSRules: new Array({
                AllowedHeaders: ['content-type'],
                AllowedMethods: ['GET', 'PUT', 'POST', 'DELETE'],
                AllowedOrigins: ['*'],
                ExposeHeaders: [],
                MaxAgeSeconds: 3000,
            }),
        },
    })
)
    .then((r) => console.log('[S3] CORS configuration added successfully'))
    .catch((e) =>
        console.error('[S3] CORS configuration failed to add: ' + e + '.')
    );

const options = {
    key: fs.readFileSync('./ssl/private.key'),
    cert: fs.readFileSync('./ssl/certificate.crt'),
    ca: fs.readFileSync('./ssl/ca_bundle.crt'),
};
const server = https.createServer(options, app);

const port = process.env.PORT || 80;

// ROUTES
app.use(S3Routes);
app.use(UserRoutes);
app.use(PartnerRoutes);

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running on https://0.0.0.0:${port}`);
});
