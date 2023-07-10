import { Request, Response } from 'express';
import ContactService from '../services/contact.service';

export default class ContactController {

  constructor(private contactService = new ContactService()) {}

  ControllerSendEmail= async (request: Request, response: Response): Promise<void> => 
  {
    // const { codAtivo } = request.params;
  
    const msn = await this.contactService.SendMail();

    response.status(200).json({message: 'Email Sent Sucess'});
  }
}