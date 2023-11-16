import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const insertImageService = async (id, req) => {
  const { files } = req;
  const images = files.map((file) => {
    return {
      event_volunteer_id: parseInt(id),
      img_name: file.filename,
      path: file.path,
    };
  });

  const eventImages = await prisma.eventImages.createMany({
    data: images,
  });
  return eventImages;
};
