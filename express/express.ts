import express from 'express';
import {default as Api} from './router/api';
import {config} from 'dotenv';
config();

const app = express();

app.use('/api', Api);

app.listen(process.env.PORT|| 3000, () => {console.log(`express server is running on port ${process.env.PORT|| 3000}`)});