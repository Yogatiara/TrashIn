import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllTPSService = async () => {
  const tps = await prisma.tPS.findMany();
  return tps;
};

const getTPSByIdService = async (
  id,
  withImage = false,
  withImageByUser = false
) => {
  const tps = await prisma.tPS.findUnique({
    where: {
      id: parseInt(id),
    },
    // include: {
    //   tpsimages: withImage
    //     ? {
    //         include: {
    //           users: Boolean(withImageByUser) ?? false,
    //         },
    //       }
    //     : false,
    // },
  });

  if (!tps) {
    throw new Error("TPS with id " + id + " not found");
  }
  return tps;
};

const createTPSService = async (data) => {
  const { latitude, longitude, address, notes, user_id } = data;

  if (!user_id) {
    throw new Error("User id is required");
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
    throw new Error("User id is required");
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
    throw new Error("TPS with id " + id + " not found");
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
