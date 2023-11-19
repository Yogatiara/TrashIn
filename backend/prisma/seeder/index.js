import { PrismaClient } from "@prisma/client";
import { UserData } from "./UserData.js";
import { RoleData } from "./RoleData.js";
import bcrypt from "bcrypt";
import { TPSData } from "./TPSData.js";
import TPSImageData from "./TPSImageData.js";
import EventData from "./EventData.js";
import EventImageData from "./EventImageData.js";

const salt = bcrypt.genSaltSync(10);

const prisma = new PrismaClient();

const seedRole = async () => {
  return RoleData.map(async (role) => {
    await prisma.role.create({
      data: {
        name: role.name,
      },
    });
  });
};

const seedUser = async () => {
  return UserData.map(async (user) => {
    const passwordHash = bcrypt.hashSync(user.password, salt);
    await prisma.user.create({
      data: {
        ...user,
        password: passwordHash,
      },
    });
  });
};

const seedTPS = async () => {
  return TPSData.map(async (tps) => {
    await prisma.tPS.create({
      data: {
        address: tps.address,
        latitude: tps.latitude,
        longitude: tps.longitude,
        notes: tps.notes,
        is_clean: tps.is_clean,
        user: {
          connect: {
            id: tps.user_id,
          },
        },
      },
    });
  });
};

const seedTpstImage = async () => {
  return TPSImageData.map(async (eventImage) => {
    await prisma.tPSImages.create({
      data: {
        img_name: eventImage.img_name,
        path: eventImage.path,
        tps: {
          connect: {
            id: eventImage.tps_id,
          },
        },
        users: {
          connect: {
            id: eventImage.user_id,
          },
        },
      },
    });
  });
};

const seedEvent = async () => {
  return EventData.map(async (event) => {
    await prisma.eventVolunteer.create({
      data: {
        name: event.name,
        notes: event.notes,
        gather_point: event.gather_point,
        quota: event.quota,
        start_at: new Date(event.start_at).toISOString(),
        end_at: new Date(event.end_at).toISOString(),
        status: event.status,
        tps: {
          connect: {
            id: event.tps_id,
          },
        },
      },
    });
  });
};

const seedEventImage = async () => {
  return EventImageData.map(async (eventImage) => {
    await prisma.eventImages.create({
      data: {
        img_name: eventImage.img_name,
        path: eventImage.path,
        event_volunteer: {
          connect: {
            id: eventImage.event_volunteer_id,
          },
        },
      },
    });
  });
};

async function main() {
  const migrate = [
    seedRole,
    seedUser,
    seedTPS,
    seedEvent,
    seedTpstImage,
    seedEventImage,
  ];
  try {
    await Promise.all(
      migrate.map(async (m) => {
        await m();
      })
    );
  } catch (error) {
    console.log(error);
  }
}

main()
  .catch(async (e) => {
    console.error(e);
  })
  .finally(async () => await prisma.$disconnect());
