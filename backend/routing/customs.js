import express from "express"
import { createCustom} from '../controllers/customController.js'
import {verifyUser} from '../utils/verifyToken.js'

const router = express.Router();

router.post('/',verifyUser,createCustom)

export default router
