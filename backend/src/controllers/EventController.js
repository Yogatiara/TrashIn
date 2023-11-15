import {
  createEventService,
  deleteEventService,
  getAllEventsService,
  getEventByIdService,
  updateEventService,
  userEnrollEventService,
} from "../services/EventServices.js";

export const getAllEvents = async (req, res, next) => {
  const { withImages, withUsers } = req.query;

  try {
    const events = await getAllEventsService(
      withImages === "true",
      withUsers === "true"
    );

    res.status(200).json({
      status: "success",
      message: "Get all TPS success",
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

export const getEventById = async (req, res, next) => {
  const { withImages, withUsers } = req.query;
  const { id } = req.params;

  try {
    const event = await getEventByIdService(
      id,
      withImages === "true",
      withUsers === "true"
    );

    res.status(200).json({
      status: "success",
      message: "Get TPS by id success",
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const event = await createEventService(req);

    res.status(200).json({
      status: "success",
      message: "Create TPS success",
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await updateEventService(id, req.body);

    res.status(200).json({
      status: "success",
      message: "Update TPS success",
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await deleteEventService(id);

    res.status(200).json({
      status: "success",
      message: "Delete TPS success",
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

export const userEnrollEvent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const event = await userEnrollEventService(id, req);

    res.status(200).json({
      status: "success",
      message: "Delete TPS success",
      data: event,
    });
  } catch (error) {
    next(error);
  }
};
