import express from 'express';
import { RequestHandler } from 'express';
import { createEmail, sendMassEmail } from '../controllers/mailing';


const router = express.Router();

router.post('/create-email', createEmail);
router.post('/send-emails', sendMassEmail as RequestHandler);

export default router;
