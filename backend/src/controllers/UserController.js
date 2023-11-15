import ErrorResponse from "../models/ErrorResponse.js";

export const getAllUsers = async (req, res, next) => {
  try {
    // const users = await getAllUsersService();
    // res.status(200).json({
    //   status: "success",
    //   message: "Get all users success",
    //   data: users,
    // });
    throw new ErrorResponse("Get all users failed", 400);
  } catch (error) {
    next(error);
  }
};
