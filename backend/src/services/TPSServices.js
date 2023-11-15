import { PrismaClient } from "@prisma/client";
import ErrorResponse from "../models/ErrorResponse.js";

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
  withImage = false,
  withUserFromImage = false,
  withUser = false
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
      latitude,
      longitude,
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
  const { latitude, longitude, address, notes, user_id } = data;

  if (!user_id) {
    throw new ErrorResponse("User id is required", 400);
  }

  const tps = await prisma.tPS.update({
    where: {
      id: parseInt(id),
    },
    data: {
      latitude,
      longitude,
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

const deleteTPSService = async (id) => {
  const tps = await getTPSByIdService(id);
  if (!tps) {
    throw new ErrorResponse("TPS with id " + id + " not found", 400);
  }

  return await prisma.tPS.delete({
    where: {
      id: parseInt(id),
    },
  });
};

export {
  getAllTPSService,
  getTPSByIdService,
  createTPSService,
  updateTPSService,
  deleteTPSService,
};
