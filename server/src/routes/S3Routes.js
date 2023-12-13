import express from 'express';
import {
    getPresignedURLRequest,
    generatePresignedURL,
} from '../controllers/S3/S3Controllers.js';

const router = express.Router();

router.get('/presigned-url', generatePresignedURL);

export default router;
