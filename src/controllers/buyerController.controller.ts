import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";

import buyerLoginService from "../service/Buyer/buyerLogin.service";
import createBuyerService from "../service/Buyer/createBuyer.service";
import listBuyersService from "../service/Buyer/listBuyers.service";
import listBuyerByIdService from "../service/Buyer/listBuyerById.service";
import updateBuyerService from "../service/Buyer/updateBuyer.service";
import deleteBuyerService from "../service/Buyer/deleteBuyer.service";
import { IBuyerLogin } from "../interfaces";

export default class BuyerController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const buyerLogin: IBuyerLogin = { email, password };

      const token = await buyerLoginService(buyerLogin);

      return res.status(201).json({
        status: 201,
        message: "Logged in!",
        token,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const newBuyer = { name, email, password };

      const buyer = await createBuyerService(newBuyer);

      return res.status(201).json({
        status: 201,
        message: "Buyer created!",
        buyer: newBuyer,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }

  static async listAll(req: Request, res: Response) {
    try {
      const buyers = await listBuyersService();

      return res.status(200).json({
        status: 200,
        buyers: buyers,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async listById(req: Request, res: Response) {
    try {
      const { buyerId } = req.params;
      const buyer = await listBuyerByIdService(buyerId);

      return res.status(200).json({
        status: 200,
        buyers: buyer,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const{buyerId} = req.body;

      const updatedBuyer = await updateBuyerService(buyerId, req.body);

      return res.status(200).json({
        status:200,
        message: "Buyer updated!"
        buyer: updatedBuyer
      })
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const {buyerId} = req.params;

      const deleteBuyer = await deleteBuyerService(buyerId);

      res.status(200).json({
        status:200,
        message: "Buyer deleted successfully"
      })
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
