import { Router } from 'express';
import { isAuth, isPartnerAuth } from '../middleware/Auth.js';
import {
    getMinimalPartnerDataById,
    accountRequest,
    approvedAccountRequest,
    partnerLogin,
    verifyLogin,
    getPartnerData,
} from '../controllers/PartnerController.js';

const router = Router();

router.get('/api/partner/:id', getMinimalPartnerDataById);
router.post('/api/partner/request', accountRequest);
router.put('/api/partner/request', approvedAccountRequest);
router.post('/api/partner/login', partnerLogin);
router.get('/api/verify/partner/', isPartnerAuth, verifyLogin);
router.get('/api/partner/', isPartnerAuth, getPartnerData);

export default router;
