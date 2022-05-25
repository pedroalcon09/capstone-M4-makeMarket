import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import listBuyerByIdService from "../services/Buyer/listBuyerById.service";
import createBuysService from "../services/Buys/createBuys.service";
import deleteBuysService from "../services/Buys/deleteBuys.service";
import listBuysByBuyerId from "../services/Buys/listBuysByBuyerId.service";
import updateBuyService from "../services/Buys/updateBuys.service";

export default class BuysController {
  static async create(req: Request, res: Response) {
    try {
      const { buyerId, productId } = req.params;

      const newBuy = await createBuysService({
        buyer_id: buyerId,
        product_id: productId,
      });

      return res.status(201).json({
        newBuy,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const { buyerId } = req.params;

      const buys = await listBuysByBuyerId(buyerId);

      return res.status(200).json({
        message: "Buys found",
        buys: buys,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const { buyId } = req.params;

      const deleteProduct = await deleteBuysService(buyId);

      res.status(200).json({
        message: "Buy canceled successfully",
        buy_canceled: deleteProduct,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const { buyerID } = req.params;

      const updatedBuy = await updateBuyService(buyerID, req.body);

      return res.status(200).json({
        message: "Buy updated!",
        buyer: updatedBuy,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
