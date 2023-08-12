import express from "express";
import { createUser, deleteUser, getAllUser, singleUser, updateUser ,getUsers} from "../controllers/userController.js";

const router = express.Router();

// import { verifyUser } from "../utils/verifyToken.js";

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/:id",singleUser);

// router.get("/",getAllUser); 

router.get("/",getUsers);

export default router;