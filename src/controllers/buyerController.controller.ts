import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";

import buyerLoginService from "../services/Buyer/buyerLogin.service";
import createBuyerService from "../services/Buyer/createBuyer.service";
import listBuyersService from "../services/Buyer/listBuyers.service";
import listBuyerByIdService from "../services/Buyer/listBuyerById.service";
import updateBuyerService from "../services/Buyer/updateBuyer.service";
import deleteBuyerService from "../services/Buyer/deleteBuyer.service";
import listBuyProductService from "../services/products/listBuyProduct.service";
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

      const buyer = await createBuyerService({ name, email, password });

      return res.status(201).json({
        status: 201,
        message: "Buyer created!",
        buyer: buyer,
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
      const { buyerId } = req.params;

      const updatedBuyer = await updateBuyerService(buyerId, req.body);

      return res.status(200).json({
        status: 200,
        message: "Buyer updated!",
        buyer: updatedBuyer,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const { buyerId } = req.params;

      const deleteBuyer = await deleteBuyerService(buyerId);

      res.status(200).json({
        status: 200,
        message: "Buyer deleted successfully",
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  // static async favoriteProduct(req: Request, res: Response) {
  //   try {
  //     const { buyerID, productID } = req.params;

  //     const favorite = await listFavoriteProductService(buyerID, productID);
  //     return res.status(200).json({
  //       status: 200,
  //       message: "Product favorite",
  //       transaction: favorite,
  //     });
  //   } catch (err) {
  //     if (err instanceof AppError) {
  //       handleError(err, res);
  //     }
  //   }
  // }
}
