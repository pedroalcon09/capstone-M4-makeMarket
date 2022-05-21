import * as express from "express";
import {
  IBuyerCreate,
  IBuyerUpdate,
  IBuyerLogin,
} from "../../src/interfaces/buyer.interfaces";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      newBuyer: IBuyerCreate;
      updateBuyer: IBuyerUpdate;
      loginBuyer: IBuyerLogin;
    }
  }
}
