import { PrismaClient } from "@prisma/client";
import ErrorResponse from "../models/ErrorResponse.js";
import { insertImageService } from "./EventImages.js";
import fs from "fs";

const prisma = new PrismaClient();

export const getAllEventsService = async (
  withImages = false,
  withUsers = false
) => {
  const events = await prisma.eventVolunteer.findMany({
    include: {
      event_images: withImages,
      user_join_event: withUsers
        ? {
            include: {
              user: true,
            },
          }
        : false,
    },
  });

  return events;
};

export const getEventByIdService = async (
  id,
  withImages = false,
  withUsers = false
) => {
  const event = await prisma.eventVolunteer.findFirst({
    where: {
      id: parseInt(id),
    },
    include: {
      event_images: withImages,
      user_join_event: withUsers
        ? {
            include: {
              user: true,
            },
          }
        : false,
    },
  });

  if (!event) {
    throw new ErrorResponse("Event with id", id, "not found", 400);
  }

  return event;
};

export const createEventService = async (req) => {
  const { name, start_at, end_at, notes, gather_point, quota, status, images } =
    req.body;

  const { files } = req;

  if (status !== "OPEN" && status !== "CLOSED") {
    throw new ErrorResponse("Status must be OPEN or CLOSED", 400);
  }

  if (!files || files.length < 1) {
    throw new ErrorResponse("Image must be at least 1", 400);
  }

  const event = await prisma.eventVolunteer.create({
    data: {
      name,
      start_at,
      end_at,
      notes,
      gather_point,
      quota: parseInt(quota),
      status,
    },
  });

  if (files && files.length > 0) {
    await insertImageService(event.id, req);
  }

  return event;
};

export const updateEventService = async (id, data) => {
  const { name, start_at, end_at, notes, gather_point, quota, status } = data;

  const event = await prisma.eventVolunteer.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      start_at,
      end_at,
      notes,
      gather_point,
      quota: quota && parseInt(quota),
      status,
    },
  });

  return event;
};

export const deleteEventService = async (id) => {
  const event = await getEventByIdService(id);
  if (!event) {
    throw new ErrorResponse("Event with id " + id + " not found", 400);
  }

  const images = await prisma.eventImages.findMany({
    where: {
      event_volunteer_id: parseInt(id),
    },
  });

  const deletedEvent = await prisma.eventVolunteer.delete({
    where: {
      id: parseInt(id),
    },
  });

  images.forEach((image) => {
    fs.unlinkSync(image.path);
  });

  return deletedEvent;
};
