import { Router } from 'express';
import { isPartnerAuth } from '../middleware/Auth.js';
import {
    getAllDestination,
    getDestinationById,
    getDestinationByIdForPartner,
    getAllDestinationByPartner,
    postNewDestination,
} from '../controllers/DestinationControllers.js';

const router = Router();

router.get('/api/destination/', getAllDestination);
router.get('/api/destination/:id', getDestinationById);
router.get(
    '/api/partner/destination/',
    isPartnerAuth,
    getAllDestinationByPartner
);
router.get(
    '/api/partner/destination/:id',
    isPartnerAuth,
    getDestinationByIdForPartner
);
router.post('/api/partner/destination/', isPartnerAuth, postNewDestination);

export default router;
