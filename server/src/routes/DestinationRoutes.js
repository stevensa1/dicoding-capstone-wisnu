import { Router } from 'express';
import { isAuth, isPartnerAuth } from '../middleware/Auth.js';
import {
    getAllDestination,
    getDestinationById,
    getDestinationByIdForPartner,
    getAllDestinationByPartner,
    postNewDestination,
    getSelfTickets,
    handleTicketPurchase,
    createReview,
    getMyReviewDestination,
    getDestinationReviews,
} from '../controllers/DestinationControllers.js';

const router = Router();

router.get('/api/destination/', getAllDestination);
router.get('/api/destination/:id', getDestinationById);
router.get('/api/ticket/', isAuth, getSelfTickets);
router.post('/api/ticket/purchase', isAuth, handleTicketPurchase);
router.post('/api/review/create', isAuth, createReview);
router.get('/api/review/my/:destinationId', isAuth, getMyReviewDestination);
router.get('/api/review/destination/:destinationId', getDestinationReviews);
router.get(
    '/access/api/destination/',
    isPartnerAuth,
    getAllDestinationByPartner
);
router.post('/api/partner/destination/', isPartnerAuth, postNewDestination);

export default router;
