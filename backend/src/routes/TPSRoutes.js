import { Router } from "express";
import tpsStorage from "../utils/storages/tpsImageStorage.js";
import {
  createTPS,
  deleteTPS,
  getAllTPS,
  getTPSById,
  insertTPSImage,
  updateTPS,
} from "../controllers/TPSController.js";

const tpsRouter = Router();

tpsRouter.get("/", getAllTPS);
tpsRouter.post("/", tpsStorage.array("images"), createTPS);
tpsRouter.get("/:id", getTPSById);
tpsRouter.put("/:id", updateTPS);
tpsRouter.delete("/:id", deleteTPS);

tpsRouter.post("/:id/image", tpsStorage.array("images"), insertTPSImage);

export default tpsRouter;
