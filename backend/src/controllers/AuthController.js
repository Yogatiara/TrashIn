import { loginService, registerService } from "../services/AuthServices.js";
import { generateAccessToken } from "../utils/generateAccessToken.js";

const registerController = async (req, res, next) => {
  try {
    const user = await registerService(req);
    res.status(201).json({
      status: "success",
      message: "Register user success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const loginController = async (req, res, next) => {
  try {
    const user = await loginService(req);
    const token = generateAccessToken(user);
    res.status(200).json({
      status: "success",
      message: "Login success",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
}

export { registerController, loginController };
