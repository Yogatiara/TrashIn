import { PrismaClient } from "@prisma/client";
import { UserData } from "./UserData.js";
import { RoleData } from "./RoleData.js";
import bcrypt from "bcrypt";

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

async function main() {
  await prisma.role.deleteMany();
  await prisma.user.deleteMany();

  seedRole();
  console.log("Role data seeded successfully");

  seedUser();
  console.log("User data seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
