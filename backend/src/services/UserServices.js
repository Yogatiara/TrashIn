import { PrismaClient } from "@prisma/client";
import ErrorResponse from "../models/ErrorResponse.js";
import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10);
const prisma = new PrismaClient();

export const getAllUsersService = async (withRoles = false) => {
  const users = await prisma.user.findMany({
    include: {
      roles: Boolean(withRoles) ?? false,
    },
  });
  return users;
};

export const getUserByIdService = async (
  id,
  withTPS = false,
  withEvents = false
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      tps: withTPS,
      user_join_event: withEvents
        ? {
            include: {
              event_volunteer: true,
            },
          }
        : false,
    },
  });

  if (!user) {
    throw new ErrorResponse("User not found", 404);
  }

  return user;
};

export const getUserTPSService = async (id) => {
  const tps = await prisma.tPS.findMany({
    where: {
      user_id: parseInt(id),
    },
  });

  if (!tps) {
    throw new ErrorResponse("TPS not found", 404);
  }

  return tps;
};

export const createUserByAdminService = async (req) => {
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

export const userJoinEventService = async (id) => {
  const { event_id } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    throw new ErrorResponse("User not found", 404);
  }

  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(event_id),
    },
  });

  if (!event) {
    throw new ErrorResponse("Event not found", 404);
  }

  const user_join_event = await prisma.user_Join_Event.create({
    data: {
      user_id: parseInt(id),
      event_id: parseInt(event_id),
    },
  });

  return user_join_event;
};

export const updateUserService = async (id, req) => {
  const { name, email, phone_number, address } = req;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    throw new ErrorResponse("User not found", 404);
  }

  const newUser = await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      email,
      phone_number,
      address,
    },
  });

  return newUser;
};

export const updatePasswordService = async (id, req) => {
  const { password, confirm_password } = req.body;

  if (password !== confirm_password) {
    throw new ErrorResponse("Password not match", 400);
  }

  if (password.length < 8) {
    throw new ErrorResponse("Password must be at least 8 characters", 400);
  }

  const passwordHash = bcrypt.hashSync(password, salt);

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    throw new ErrorResponse("User not found", 404);
  }

  const newUser = await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      password: passwordHash,
    },
  });

  return newUser;
};

export const getUserEnrolledEventService = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    throw new ErrorResponse("User not found", 404);
  }

  const user_join_event = await prisma.user_Join_Event.findMany({
    where: {
      user_id: parseInt(id),
    },
    include: {
      event: true,
    },
  });

  return user_join_event;
};

export const getUserEnrolledEventByIdService = async (id, event_id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    throw new ErrorResponse("User not found", 404);
  }

  const user_join_event = await prisma.user_Join_Event.findUnique({
    where: {
      user_id: parseInt(id),
      event_id: parseInt(event_id),
    },
    include: {
      event: true,
    },
  });

  return user_join_event;
};

export const getUserVolunteerHistoryService = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    throw new ErrorResponse("User not found", 404);
  }

  const user_join_event = await prisma.user_Join_Event.findMany({
    where: {
      user_id: parseInt(id),
    },
    include: {
      event_volunteer: true,
    },
  });

  return user_join_event;
};
