import { Response } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export function handleError(err: any, res: Response) {
  const { statusCode, message } = err;

  return res.status(statusCode).json({
    status: "Error",
    statusCode,
    message,
  });
}
