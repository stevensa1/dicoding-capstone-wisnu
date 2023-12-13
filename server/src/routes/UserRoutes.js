import { Router } from 'express';
import {
    registerUser,
    checkEmail,
    userLogin,
    getSelfUserData,
} from '../controllers/UserControllers.js';
import { isAuth } from '../middleware/Auth.js';

const router = Router();

router.post('/api/validation/email', checkEmail);
router.post('/api/register', registerUser);
router.post('/api/login', userLogin);

router.get('/api/user', isAuth, getSelfUserData);

export default router;
