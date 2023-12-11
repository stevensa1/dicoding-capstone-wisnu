import express from 'express';
import { getPresignedURLRequest } from '../controllers/S3/S3Controllers.js';

const router = express.Router();

router.get('/presigned-url', getPresignedURLRequest);

export default router;
