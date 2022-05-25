import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";

import createFavoriteService from "../services/favorites/createFavorite.service";
import listFavoriteService from "../services/favorites/ListFavorites.service";
import deleteFavoriteService from "../services/favorites/deleteFavorite.service";

export default class favoriteController {
  static async create(req: Request, res: Response) {
    try {
      const { buyerId, productId } = req.params;

      const newFavorite = await createFavoriteService(buyerId, productId);

      return res.status(201).json({
        message: "Product added to favourites successfully",
        newFavorite: newFavorite,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const { buyerID, productId } = req.params;

      const favoriteRemoved = await deleteFavoriteService(buyerID, productId);

      return res
        .status(200)
        .json({ message: "Product removed from favourites successfully" });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async list(req: Request, res: Response) {
    try {
      const { buyerID } = req.params;

      const listFavorite = await listFavoriteService(buyerID);

      return res.status(200).json({ favorites: listFavorite });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
