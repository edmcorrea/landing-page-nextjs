import { Router } from 'express';
import ContactController from '../controllers/contact.controller';

const routers = Router();

const contactController = new ContactController();

// UTILIZAÇÃO DO MÉTODO POST POR EXISTIR REQUEST DE ENTRADA
routers.post('/contact', contactController.ControllerSendEmail);

export default routers;