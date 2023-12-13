import { Router } from 'express';
import { registerUser, checkEmail } from '../controllers/UserControllers.js';

const router = Router();

router.post('/email', checkEmail);
router.post('/register', registerUser);

export default router;
