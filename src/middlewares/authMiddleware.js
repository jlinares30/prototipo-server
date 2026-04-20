import { supabase } from '../config/supabaseClient.js';

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: 'No se proporcionó un token' });

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Token inválido o usuario no encontrado' });
    }

    if (!user.email.endsWith('@upc.edu.pe')) {
      return res.status(403).json({ error: 'Acceso exclusivo para la comunidad UPC' });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Error de autenticación' });
  }
};