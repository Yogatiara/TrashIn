import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const salt = bcrypt.genSaltSync(10);

const registerService = async (req) => {
  const {
    name,
    email,
    phone_number,
    address,
    gender,
    role_id,
    password,
    confirm_password,
  } = req.body;

  if (phone_number.length < 10) {
    throw new Error("Phone number must be at least 10 characters");
  }

  if (password !== confirm_password) {
    throw new Error("Password not match");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }

  const passwordHash = bcrypt.hashSync(password, salt);

  const user = await prisma.user
    .create({
      data: {
        name,
        email,
        address,
        phone_number,
        gender,
        password: passwordHash,
        roles: {
          connect: {
            id: role_id,
          },
        },
      },
    })
    .catch((err) => {
      throw new Error(err);
    });

  return user;
};

const loginService = async (req) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      roles: true,
    },
  });

  if (!user) {
    throw new Error("Email not found");
  }

  const isPasswordMatch = bcrypt.compareSync(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Password not match");
  }

  return user;
};

export { registerService, loginService }
