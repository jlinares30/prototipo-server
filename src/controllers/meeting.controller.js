import { supabase } from '../config/supabaseClient.js';

export const createMeeting = async (req, res) => {
  const { productId, interestedId, locationId, date, time, notes } = req.body;
  const creatorId = req.user.id; // Obtenido del authMiddleware

  const { data, error } = await supabase
    .from('meetings')
    .insert([{
      product_id: productId,
      creator_id: creatorId,
      interested_id: interestedId,
      location_id: locationId,
      meeting_date: date,
      meeting_time: time,
      status: 'pending',
      notes
    }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
};