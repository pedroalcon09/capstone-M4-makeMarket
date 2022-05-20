import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";

import buyerLoginService from "../service/Buyer/buyerLogin.service";
import createBuyerService from "../service/Buyer/createBuyer.service";
import listBuyersService from "../service/Buyer/listBuyers.service";
import listBuyerByIdService from "../service/Buyer/listBuyerById.service";
import updateBuyerService from "../service/Buyer/updateBuyer.service";
import deleteBuyerService from "../service/Buyer/deleteBuyer.service";

export default class BuyerController {
  static async login(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async create(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }

  static async listAll(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async listById(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
