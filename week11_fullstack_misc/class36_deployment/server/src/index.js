import { config } from 'dotenv';
import mongoose, { mongo } from 'mongoose';
import express from 'express';

config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on('open', () => {
  console.log('Connected');
});

console.log(process.env.MONGODB_URI)


const app = express();

app.get('/', (req, res) => {
  res.end('hi');
});

app.listen(7891);
