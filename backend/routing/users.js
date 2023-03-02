import express from "express";
import { createUser, deleteUser, getAllUser, singleUser, updateUser } from "../controllers/userController.js";

const router = express.Router();


router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.get("/:id",singleUser);
router.get("/",getAllUser);

export default router;