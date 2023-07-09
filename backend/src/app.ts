import express from 'express';


const app = express();

app.use(express.json());

app.use('/', (_req, res) => res.status(200).json({ok:"on"}))


export default app;