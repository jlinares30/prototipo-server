import path, { dirname } from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import express from 'express';
import { supabase } from './src/config/supabaseClient.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

async function start(){
  try {    // Simulate an asynchronous operation (e.g., database connection)
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching products:', error);
    } else {
      console.log('Products fetched successfully:', data);
    }
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
  catch (error) {
    console.error('Error to connect to Supabase:', error);
  }
}

start();
