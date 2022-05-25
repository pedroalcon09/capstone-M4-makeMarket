import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";

import sellerLoginService from "../services/Seller/sellerLogin.service";
import createSellerService from "../services/Seller/createSeller.service";
import listSellerService from "../services/Seller/listSeller.service";
import listSellerByIdService from "../services/Seller/listSellerById.service";
import updateSellerService from "../services/Seller/updateSeller.service";
import deleteSellerService from "../services/Seller/deleteSeller.service";
import { ISellerLogin } from "../interfaces";

export default class SellerController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const sellerLogin: ISellerLogin = { email, password };

      const token = await sellerLoginService(sellerLogin);

      return res.status(201).json({
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

      const seller = await createSellerService({ name, email, password });

      console.log(seller);

      return res.status(201).json({
        message: "Seller created!",
        seller: seller,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }

  static async listAll(req: Request, res: Response) {
    try {
      const sellers = await listSellerService();

      return res.status(200).json({
        sellers: sellers,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async listById(req: Request, res: Response) {
    try {
      const { sellerId } = req.params;

      const Seller = await listSellerByIdService(sellerId);

      return res.status(200).json({
        sellers: Seller,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const { sellerId } = req.params;

      const updatedSeller = await updateSellerService(sellerId, req.body);

      return res.status(200).json({
        message: "Seller updated!",
        Seller: updatedSeller,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const { sellerId } = req.params;

      const deleteSeller = await deleteSellerService(sellerId);

      res.status(200).json({
        message: "Seller deleted successfully",
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
