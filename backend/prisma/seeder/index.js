import { PrismaClient } from "@prisma/client";
import { UserData } from "./UserData.js";
import { RoleData } from "./RoleData.js";
import bcrypt from "bcrypt";
import { TPSData } from "./TPSData.js";

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
            id: 3,
          }
        }
      },
    });
  });
};

async function main() {
  await prisma.role.deleteMany();
  await prisma.user.deleteMany();
  await prisma.tPS.deleteMany();

  seedRole();
  console.log("Role data seeded successfully");

  seedUser();
  console.log("User data seeded successfully");
  setTimeout(() => {
    seedTPS();
  }, 2000)
  console.log("TPS data seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });