import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import createBuysProduct from "../services/Buys/createBuys.service";

export default class BuysController {
  static async create(req: Request, res: Response) {
    try {
      const { buyerId, productId } = req.params;
      const buys = {
        buyer_id: buyerId,
        product_id: productId,
      };
      const newBuy = createBuysProduct(buys);
      return res.status(201).json({
        status: 201,
        message: "Product purchasse!",
        product_id: productId,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
