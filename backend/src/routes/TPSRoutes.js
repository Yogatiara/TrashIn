import { Router } from "express";
import {
  createTPS,
  deleteTPS,
  getAllTPS,
  getTPSById,
  updateTPS,
} from "../controllers/TPSController.js";

const tpsRouter = Router();

tpsRouter.get("/", getAllTPS);
tpsRouter.post("/", createTPS);
tpsRouter.get("/:id", getTPSById);
tpsRouter.put("/:id", updateTPS);
tpsRouter.delete("/:id", deleteTPS);

export default tpsRouter;
