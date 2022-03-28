require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './db';
import rootRouter from './routers/rootRouter';
import fileUpload from 'express-fileupload';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(morgan('dev'));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

app.use('/', rootRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
