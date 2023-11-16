import ErrorResponse from "../models/ErrorResponse.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ErrorResponse) {
    return res.status(err.statusCode || 500).json({
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
    message_2: err.message,
  });
};
