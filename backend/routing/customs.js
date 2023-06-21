import express from "express"
import { createCustom, getCustom, updateCustom} from '../controllers/customController.js'
import {verifyUser} from '../utils/verifyToken.js'

const router = express.Router();

router.post('/',createCustom)
router.put('/:id',updateCustom)
router.get('/',getCustom)

export default router
