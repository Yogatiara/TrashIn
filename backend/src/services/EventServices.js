import { PrismaClient } from "@prisma/client";

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
    throw new Error("Event with id", id, "not found");
  }

  return event;
};

export const createEventService = async (data) => {
  const { name, start_at, end_at, notes, gather_point, quota, status, images } =
    data;

  if (status !== "OPEN" && status !== "CLOSED") {
    throw new Error("Status must be OPEN or CLOSED");
  }

  if (!images || images.length < 1) {
    throw new Error("Image must be at least 1");
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

  if (images && images.length > 0) {
    images.map(async (image) => {
      return await prisma.eventImages.create({
        data: {
          img_name: image.img_name,
          path: image.path,
          event_volunteer: {
            connect: {
              id: event.id,
            },
          },
        },
      });
    });
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
    throw new Error("Event with id " + id + " not found");
  }

  return await prisma.eventVolunteer.delete({
    where: {
      id: parseInt(id),
    },
  });
};