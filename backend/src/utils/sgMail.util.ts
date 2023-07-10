const sgMail = require('@sendgrid/mail');
import dotenv from 'dotenv';

dotenv.config();


export const SGMail = sgMail.setApiKey(process.env.SENDGRID_API_KEY);

