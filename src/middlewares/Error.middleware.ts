import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export const errorMiddleware = (
  err: any,
  request: Request,
  response: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    message: "Internal server error",
  });
};
