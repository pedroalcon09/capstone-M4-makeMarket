import { NextFunction, Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import jwt from "jsonwebtoken";

export default class AuthCheckMiddleware {
  static async seller(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new AppError(401, "Token is needed");
      }

      const { sellerId } = req.params;

      if (!sellerId) {
        throw new AppError(401, "Seller id is needed");
      }

      jwt.verify(
        token as string,
        process.env.JWT_SECRET as string,
        (err: any, decoded: any) => {
          if (err) {
            throw new AppError(401, "Invalid token");
          }
          if (decoded.id !== sellerId) {
            throw new AppError(401, "You can only access your profile");
          }

          next();
        }
      );
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async buyer(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new AppError(401, "Token is needed");
      }

      const { buyerId } = req.params;

      if (!buyerId) {
        throw new AppError(401, "Buyer id is needed");
      }

      jwt.verify(
        token as string,
        process.env.JWT_SECRET as string,
        (err: any, decoded: any) => {
          if (decoded.id !== buyerId) {
            throw new AppError(401, "You can only list yourself");
          }
          if (err) {
            throw new AppError(401, "Invalid token");
          }

          next();
        }
      );
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
