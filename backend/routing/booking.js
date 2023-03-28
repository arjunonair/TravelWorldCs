
import express from "express";  
import { getAllBooking, getBooking, newBook } from "../controllers/bookController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/",verifyUser, newBook);
router.get("/:id",verifyUser,getBooking);
router.get("/",verifyAdmin,getAllBooking);

export default router;