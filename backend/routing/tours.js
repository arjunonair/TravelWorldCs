
import express from "express";
import { createTour, deleteTour, getTour, singleTour, updateTour } from '../controllers/tourController.js';

const router  = express.Router();

router.post("/",createTour);
router.put("/:id",updateTour);
router.delete("/:id",deleteTour);
router.get("/:id",singleTour);
router.get("/",getTour);

export default router;