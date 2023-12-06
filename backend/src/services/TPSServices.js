import { PrismaClient } from "@prisma/client";
import ErrorResponse from "../models/ErrorResponse.js";
import fs from "fs";

const prisma = new PrismaClient();

const getAllTPSService = async (
  withImage = false,
  withUserFromImage = false,
  withUser = false
) => {
  const tps = await prisma.tPS.findMany({
    include: {
      tpsimages: withImage
        ? {
            include: {
              users: Boolean(withUserFromImage) ?? false,
            },
          }
        : false,
      user: Boolean(withUser) ?? false,
    },
  });
  return tps;
};

const getTPSByIdService = async (
  id,
  withImage = false,
  withUserFromImage = false,
  withUser = false,
  withEvent = false
) => {
  const tps = await prisma.tPS.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      tpsimages: withImage
        ? {
            include: {
              users: Boolean(withUserFromImage) ?? false,
            },
          }
        : false,
      user: Boolean(withUser) ?? false,
      events: Boolean(withEvent)
        ? {
            where: {
              status: "OPEN",
            },
          }
        : false,
    },
  });

  if (!tps) {
    throw new ErrorResponse("TPS with id " + id + " not found", 400);
  }

  return tps;
};

const createTPSService = async (data) => {
  const { latitude, longitude, address, notes, user_id } = data;

  if (!user_id) {
    throw new ErrorResponse("User id is required", 400);
  }

  const tps = await prisma.tPS.create({
    data: {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      address,
      notes,
      user: {
        connect: {
          id: parseInt(user_id),
        },
      },
    },
  });
  return tps;
};

const updateTPSService = async (id, data) => {
  const { latitude, longitude, is_clean, address, notes } = data;

  console.log(is_clean, Boolean(is_clean));
  const tps = await prisma.tPS.update({
    where: {
      id: parseInt(id),
    },
    data: {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      address,
      notes,
      is_clean: is_clean == "false" ? false : true,
    },
  });
  return tps;
};

const deleteTPSService = async (id) => {
  const tps = await getTPSByIdService(id);
  if (!tps) {
    throw new ErrorResponse("TPS with id " + id + " not found", 400);
  }
  const images = await prisma.tPSImages.findMany({
    where: {
      tps_id: parseInt(id),
    },
  });

  const deletedTPS = await prisma.tPS.delete({
    where: {
      id: parseInt(id),
    },
  });

  images.forEach((image) => {
    fs.unlinkSync(image.path);
  });

  return deletedTPS;
};

export {
  getAllTPSService,
  getTPSByIdService,
  createTPSService,
  updateTPSService,
  deleteTPSService,
};
