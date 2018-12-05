import { config } from 'dotenv';
import mongoose, { mongo } from 'mongoose';
import app from './routes/app';

config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on('open', () => {
  console.log('Connected');
});

const PORT = process.env.PORT || 7891

app.listen(PORT);
