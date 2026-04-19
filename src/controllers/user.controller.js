import { supabase } from '../config/supabaseClient.js';

export const syncProfile = async (req, res) => {
  const { id, email, name, career, cycle } = req.body;

  if (!email.endsWith('@upc.edu.pe')) {
    return res.status(403).json({ error: 'Solo se permiten correos de la UPC' });
  }

  const { data, error } = await supabase
    .from('users')
    .upsert({ 
      id, 
      name, 
      email, 
      career, 
      cycle,
      reputation: 5.0, // Reputación inicial base
      verified: true 
    })
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
};