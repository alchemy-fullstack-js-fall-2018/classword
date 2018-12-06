import express from 'express';
import morgan from 'morgan';
import userRoutes from './api/users';
import { errorHandler } from '../middleware/error';
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', userRoutes)

app.use(errorHandler);

export default app;
