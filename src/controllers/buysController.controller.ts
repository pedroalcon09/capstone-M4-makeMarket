import { Request, Response } from "express";
import { string } from "yup";
import { AppError, handleError } from "../errors/appError";
import deleteBuyerService from "../services/Buyer/deleteBuyer.service";
import createBuysProduct from "../services/Buys/createBuys.service";
import updateBuyService from "../services/Buys/updateBuys.service";

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
  static async delete(req: Request, res: Response) {
    try {
      const { product_id } = req.params;

      const deleteProduct = await deleteBuyerService(product_id);

      res.status(200).json({
        status: 200,
        message: "Product deleted successfully",
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
        status: 200,
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
