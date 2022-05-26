import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";

import buyerLoginService from "../services/Buyer/buyerLogin.service";
import createBuyerService from "../services/Buyer/createBuyer.service";
import listBuyersService from "../services/Buyer/listBuyers.service";
import listBuyerByIdService from "../services/Buyer/listBuyerById.service";
import updateBuyerService from "../services/Buyer/updateBuyer.service";
import deleteBuyerService from "../services/Buyer/deleteBuyer.service";
import listFavoritesService from "../services/Buyer/listFavorite.service";
import removedFromFavoriteService from "../services/Buyer/removeFavorite.service";
import addToFavoriteService from "../services/Buyer/addFavorite.service";

import { IBuyerLogin } from "../interfaces";

export default class BuyerController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const buyerLogin: IBuyerLogin = { email, password };

      const token = await buyerLoginService(buyerLogin);

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

      const buyer = await createBuyerService({ name, email, password });

      return res.status(201).json({
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
        message: "Buyer deleted successfully",
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }

  static async addToFavorite(req: Request, res: Response) {
    try {
      const { buyerId, productId } = req.params;

      const addedFavorite = await addToFavoriteService(buyerId, productId);

      res.status(201).json({
        message: "Product added to favorites",
        product: addedFavorite,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async removeFromFavorite(req: Request, res: Response) {
    try {
      const { buyerId, productId } = req.params;

      const removedFavorite = await removedFromFavoriteService(
        buyerId,
        productId
      );

      res.status(200).json({
        message: "Product removed from favorites",
        product_removed: removedFavorite,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async listFavorites(req: Request, res: Response) {
    try {
      const { buyerId } = req.params;

      const listFavorite = await listFavoritesService(buyerId);

      res.status(200).json(listFavorite);
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
