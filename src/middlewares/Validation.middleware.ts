import { Request, Response, NextFunction } from "express";

import * as yup from "yup";
import { AppError } from "../errors/appError";

export const validateMiddleware =
  (schema: yup.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
      await schema.validate(body, { abortEarly: false, stripUnknown: true });
      next();
    } catch (err: any) {
      next(new AppError(400, err.message));
    }
  };
