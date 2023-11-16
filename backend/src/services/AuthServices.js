import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import ErrorResponse from "../models/ErrorResponse.js";

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
    throw new ErrorResponse("Phone number must be at least 10 characters", 400);
  }

  if (password !== confirm_password) {
    throw new ErrorResponse("Password not match", 400);
  }

  if (password.length < 8) {
    throw new ErrorResponse("Password must be at least 8 characters", 400);
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
      throw new ErrorResponse(err, 400);
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
    throw new ErrorResponse("Email not found", 400);
  }

  const isPasswordMatch = bcrypt.compareSync(password, user.password);

  if (!isPasswordMatch) {
    throw new ErrorResponse("Password not match", 400);
  }

  return user;
};

export { registerService, loginService }
