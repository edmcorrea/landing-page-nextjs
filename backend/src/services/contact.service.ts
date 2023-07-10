// import { ILogin } from '../interfaces';
import { SGMail } from '../utils/sgMail.util';

// OPTOU-SE POR MANTER OS DADOS NO CONTROLLER E NO SERVICE, POIS NÃO SERÁ ACESSADO NENHUM CONTEÚDO NO DB
export default class ContactService {

  msg = {
    to: ['edmcorrea.eng@gmail.com'],
    from: {
      name: 'Landing Page J Pster',
      email: process.env.FROM_EMAIL
    },
    subject: 'Prospecção - Forms de contato da Empresa',
    text: 'this is TEXT',
    // html: '<strong>this is HTML</strong>',
  };

  SendMail = async (html: string) => {
    try {
      await SGMail.send({ ...this.msg, html });
      console.log('Email sent sucess');
      
    } catch (error) {
      console.error(error);
    }
  }
}

  