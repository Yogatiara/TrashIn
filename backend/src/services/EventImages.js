import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const insertImageService = async (id, req) => {
  const { files } = req;
  const { file } = req;

  if (file) {
    const image = {
      event_volunteer_id: parseInt(id),
      img_name: file.filename,
      path: file.path,
    };

    const eventImage = await prisma.eventImages.create({
      data: image,
    });
    return eventImage;
  } else if (files && files.length > 0) {
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
  }
};
