import express from 'express';
import { createProduct } from '../controllers/productController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createProduct);
router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) return res.status(400).json(error);
    res.json(data);
});

export default router;