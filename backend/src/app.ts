import express from 'express';
// const cors = require('cors');
import cors from 'cors';
import routers from './routers/routers';


const app = express();

app.use(express.json());
app.use(cors());
app.use(routers);

   
export default app;