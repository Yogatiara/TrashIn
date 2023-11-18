import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  getUserTPS,
  getUserVolunteerHistory,
  updateUser,
  updateUserPassword,
} from "../controllers/UserController.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.get("/:id/tps", getUserTPS);
userRouter.get("/:id/event", getUserVolunteerHistory);
userRouter.put("/:id", updateUser);
userRouter.put("/:id/password", updateUserPassword);


export default userRouter;
