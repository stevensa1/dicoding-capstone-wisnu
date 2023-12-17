import { Router } from 'express';
import { getStatistics } from '../controllers/GlobalController.js';

const router = Router();

router.get('/api/v1/site-stats', getStatistics);

export default router;
