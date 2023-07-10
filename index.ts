require('dotenv').config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import './app/config/db';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Server is listening on port ', PORT);
});
