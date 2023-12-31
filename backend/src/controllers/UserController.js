import {
  getAllUsersService,
  getUserByIdService,
  getUserTPSService,
  getUserVolunteerHistoryService,
  updatePasswordService,
  updateUserService,
} from "../services/UserServices.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const { withRoles } = req.query;
    const users = await getAllUsersService(withRoles === "true");
    res.status(200).json({
      status: "success",
      message: "Get all users success",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { withTPS, withEvents } = req.query;
    const user = await getUserByIdService(
      id,
      withTPS === "true",
      withEvents === "true"
    );
    res.status(200).json({
      status: "success",
      message: "Get user by id success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserTPS = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tps = await getUserTPSService(id);
    res.status(200).json({
      status: "success",
      message: "Get user tps success",
      data: tps,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await updateUserService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Update user success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserPassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await updatePasswordService(id, req);
    res.status(200).json({
      status: "success",
      message: "Update user password success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserVolunteerHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const volunteer = await getUserVolunteerHistoryService(id);
    res.status(200).json({
      status: "success",
      message: "Get user volunteer history success",
      data: volunteer,
    });
  } catch (error) {
    next(error);
  }
};
