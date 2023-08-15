
import express from "express";  
import { deleteBooking, getAllBooking, getBooking, newBook } from "../controllers/bookController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", newBook);
router.get("/s",getBooking);
router.get("/",getAllBooking);
router.delete("/:id",deleteBooking);

export default router;