import { Router } from 'express';
import ContactController from '../controllers/contact.controller';

const routers = Router();

const contactController = new ContactController();

routers.post('/contact', contactController.ControllerSendEmail);

export default routers;