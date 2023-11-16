import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET_TOKEN, { expiresIn: "7d" });
};

export { generateAccessToken };