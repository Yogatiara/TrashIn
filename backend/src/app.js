import express from "express";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allUser = await prisma.user.findMany({
    include: {
      roles: true
    }
  });
  console.log(allUser);
}

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

main();
export default app;
