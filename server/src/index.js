import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port 0.0.0.0:${port}`);
});
