import express from "express";
import { createUser, deleteUser, getAllUser, singleUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

import { verifyUser } from "../utils/verifyToken.js";

router.post("/",createUser);

router.put("/:id",updateUser);

router.delete("/:id",deleteUser);

router.get("/:id",verifyUser,singleUser);

router.get("/",getAllUser);

export default router;