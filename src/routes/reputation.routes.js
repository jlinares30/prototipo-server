import { Router } from 'express';
import { rateUser } from '../controllers/reputation.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, rateUser);

export default router;