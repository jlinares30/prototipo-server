import { Router } from 'express';
import { createMeeting } from '../controllers/meeting.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, createMeeting);

router.get('/my-meetings', authMiddleware, async (req, res) => {
    const { data, error } = await supabase
        .from('meetings')
        .select('*, products(title), locations(name)')
        .or(`creator_id.eq.${req.user.id},interested_id.eq.${req.user.id}`);
    
    if (error) return res.status(400).json(error);
    res.json(data);
});

export default router;