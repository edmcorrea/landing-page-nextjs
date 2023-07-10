import { Request, Response } from 'express';
import ContactService from '../services/contact.service';

export default class ContactController {

  constructor(private contactService = new ContactService()) {}

  ControllerSendEmail= async (request: Request, response: Response): Promise<void> => 
  {
    const { html } = request.params;
  
    await this.contactService.SendMail(html);

    response.status(201).json({message: 'Email Sent Sucess'});
  }
}