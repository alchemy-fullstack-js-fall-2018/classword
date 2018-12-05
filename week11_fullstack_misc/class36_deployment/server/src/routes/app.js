import express from 'express';
import userRoutes from './api/users';
import { errorHandler } from '../middleware/error';
const app = express();

app.use(express.json());

app.use('/api/users', userRoutes)

app.use(errorHandler);

export default app;
