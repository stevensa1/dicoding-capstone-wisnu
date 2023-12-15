import { Router } from 'express';
// import { isAuth } from '../middleware/Auth.js';
import {
    accountRequest,
    approvedAccountRequest,
} from '../controllers/PartnerController.js';

const router = Router();

router.post('/api/partner/request', accountRequest);
router.put('/api/partner/request', approvedAccountRequest);

export default router;
