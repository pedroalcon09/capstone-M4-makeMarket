import * as express from "express";
import { ICategories } from "../../src/interfaces/categories.interfaces";
import {
  IBuyerCreate,
  IBuyerUpdate,
  IBuyerLogin,
} from "../../src/interfaces/buyer.interfaces";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}
