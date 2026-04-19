import { Router } from 'express';
import { syncProfile } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/sync', authMiddleware, syncProfile);

export default router;