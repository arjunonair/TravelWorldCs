import express from 'express'
import { sendSMS } from '../controllers/smsController.js'

const router = express.Router();

router.post('/',sendSMS)

export default router