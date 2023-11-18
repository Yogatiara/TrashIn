import { Router } from "express";
import {
  checkUserEnrollment,
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
eventRouter.post("/", [eventImageStorage.single("image")], createEvent);
eventRouter.get("/:id", getEventById);
eventRouter.put("/:id", updateEvent);
eventRouter.delete("/:id", deleteEvent);
eventRouter.post("/:id/enroll", userEnrollEvent);
eventRouter.get("/:id/enroll", checkUserEnrollment);

export default eventRouter;
