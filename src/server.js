import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './routes/product.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import meetingRoutes from './routes/meeting.routes.js';
import reputationRoutes from './routes/reputation.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middlewares
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/products', productRoutes);
app.use('/meetings', meetingRoutes);
app.use('/reputation', reputationRoutes);
app.use('/auth', authRoutes);

export default app;

