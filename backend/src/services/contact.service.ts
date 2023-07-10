// import { ILogin } from '../interfaces';
import { SGMail } from '../utils/sgMail.util';

export default class ContactService {

  msg = {
    to: ['edmcorrea.eng@gmail.com'],
    from: {
      name: 'Landing Page J Pster',
      email: process.env.FROM_EMAIL
    }, // Use the email address or domain you verified above
    subject: 'this is SUBJECT',
    text: 'this is TEXT',
    html: '<strong>this is HTML</strong>',
  };

  SendMail = async () => {
    try {
      await SGMail.send(this.msg);
      console.log('Email sent sucess');
      
    } catch (error) {
      console.error(error);
      
      // if (error.response) {
        //   console.error(error.response.body)
        // }
    }
  }
}

  