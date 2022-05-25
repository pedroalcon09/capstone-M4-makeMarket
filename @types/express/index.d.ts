import * as express from "express";
import { IBuysPay } from "../../src/interfaces/buys.interfaces";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}
