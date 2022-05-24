import * as express from "express";
import { ICategories } from "../../src/interfaces/categories.interfaces";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}
