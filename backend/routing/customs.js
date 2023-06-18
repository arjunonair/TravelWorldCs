import express from "express"
import { createCustom, getCustom, updateCustom} from '../controllers/customController.js'
import {verifyUser} from '../utils/verifyToken.js'

const router = express.Router();

router.post('/',verifyUser,createCustom)
router.put('/:id',verifyUser,updateCustom)
router.get('/',verifyUser,getCustom)

export default router
