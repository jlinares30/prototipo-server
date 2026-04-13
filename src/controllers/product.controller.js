import { supabase } from '../config/supabaseClient.js';
import cloudinary from '../config/cloudinary.js';

export const createProduct = async (req, res) => {
  const { title, price, imageBase64, category, userId } = req.body;

  const uploadRes = await cloudinary.uploader.upload(imageBase64, {
      folder: 'ecoswap-app/products',
      transformation: [
          { width: 800, height: 800, crop: "limit" },
          { quality: 35 },
          { fetch_format: "auto" }
        ]
    });

  const { data, error } = await supabase
    .from('products')
    .insert([{ 
      title, 
      price, 
      category,
      image_url: uploadRes.secure_url,
      user_id: userId 
    }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};