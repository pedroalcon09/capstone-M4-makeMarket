import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import createProductService from "../../services/products/createProduct.service.ts";

export default class ProductsController {
  static async create(req: Request, res: Response) {
    try {
      const { name, price, description, stock, url_img, category_id } =
        req.body;
      const { sellerId } = req.params;

      const newProduct = await createProductService({
        name,
        price,
        description,
        stock,
        url_img,
        category_id,
        sellerId,
      });

      return res.status(201).json({ newProduct });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async favorite(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async buy(req: Request, res: Response) {
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
  static async listByCategory(req: Request, res: Response) {
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
