import express, { Request, Response } from 'express';
const sgMail = require('@sendgrid/mail');
// import sgMail from '@sendgrid/mail';
// const cors = require('cors');
import cors from 'cors';

import dotenv from 'dotenv';
import routers from './routers/routers';

dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());

app.use(routers);

// app.post('/contact', ControllerSendEmail)



// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: ['edmcorrea.eng@gmail.com'],
//   from: {
//     name: 'Landing Page J Pster',
//     email: process.env.FROM_EMAIL
//   }, // Use the email address or domain you verified above
//   subject: 'this is SUBJECT',
//   text: 'this is TEXT',
//   html: '<strong>this is HTML</strong>',
// };
  
// const SendMail = async () => {
//   try {
//     await sgMail.send(msg);
//     console.log('Email sent sucess');
    
//   } catch (error) {
//     console.error(error);
    
//     // if (error.response) {
//       //   console.error(error.response.body)
//       // }
//   }
// }

// OPTOU-SE POR MANTER OS DADOS NO CONTROLLER E NO SERVICE, POIS NÃO SERÁ ACESSADO NENHUM CONTEÚDO NO DB

// async function ControllerSendEmail(_request: Request, response: Response): Promise<void> {
//   // const { codAtivo } = request.params;

//   await SendMail();
//   response.status(200).json({message: 'Email Sent Sucess'});
// }
    

export default app;