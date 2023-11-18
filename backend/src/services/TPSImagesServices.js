import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const insertImageService = async (id, req) => {
  const { files } = req;
  console.log(files);
  const { user_id } = req.body;
  const images = files.map((file) => {
    return {
      user_id: parseInt(user_id),
      tps_id: parseInt(id),
      img_name: file.filename,
      path: file.path,
    };
  });

  const tpsImages = await prisma.tPSImages.createMany({
    data: images,
  });
  return tpsImages;
};

export const getImagesByTPSIdService = async (id) => {
  const images = await prisma.tPSImages.findMany({
    where: {
      tps_id: parseInt(id),
    },
  });

  return images;
};
