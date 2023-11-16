import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  userEnrollEvent,
} from "../controllers/EventController.js";
import eventImageStorage from "../utils/storages/eventImageStorage.js";
const eventRouter = Router();

eventRouter.get("/", getAllEvents);
eventRouter.post("/", eventImageStorage.array('images'), createEvent);
eventRouter.get("/:id", getEventById);
eventRouter.put("/:id", updateEvent);
eventRouter.delete("/:id", deleteEvent);
eventRouter.post("/:id/enroll", userEnrollEvent);

export default eventRouter;
