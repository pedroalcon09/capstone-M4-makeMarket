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

      const seller = await createSellerService({ name, email, password });

      console.log(seller);

      return res.status(201).json({
        status: 201,
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
        status: 200,
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
      const { sellerID } = req.params;
      const Seller = await listSellerByIdService(sellerID);

      return res.status(200).json({
        status: 200,
        Sellers: Seller,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const { sellerID } = req.params;

      const updatedSeller = await updateSellerService(sellerID, req.body);

      return res.status(200).json({
        status: 200,
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
      const { sellerID } = req.params;

      const deleteSeller = await deleteSellerService(sellerID);

      res.status(200).json({
        status: 200,
        message: "Seller deleted successfully",
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
