
import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSearch, getTourCount, singleTour, updateTour } from '../controllers/tourController.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const router  = express.Router();

router.post("/", createTour);

router.put("/:id", updateTour);

router.delete("/:id", deleteTour);

router.get("/:id", singleTour);

router.get("/",getAllTour);

router.get("/search/getSearch",getSearch);

router.get("/search/getFeatured",getFeaturedTour);

router.get("/search/getTourCount",getTourCount);

export default router;
