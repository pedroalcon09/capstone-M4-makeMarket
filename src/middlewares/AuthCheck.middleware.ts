import { NextFunction, Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import jwt from "jsonwebtoken";

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    const { buyerId } = req.params;

    jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
      (err: any, decoded: any) => {
        if (err) {
          throw new AppError(401, "Invalid token");
        }

        console.log(decoded.id);
        next();
      }
    );
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
