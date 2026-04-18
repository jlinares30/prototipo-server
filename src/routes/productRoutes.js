import express from 'express';
import { createProduct, getAllProducts } from '../controllers/product.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createProduct);
router.get('/', getAllProducts);

export default router;