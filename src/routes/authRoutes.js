import { Router } from 'express';
import { login, getCurrentUser } from '../controller/authController.js';

const router = Router();

router.post('/login', login);
router.get('/users/:id', getCurrentUser);

export default router;
