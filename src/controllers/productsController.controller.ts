import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import createProductService from "../services/products/createProduct.service";
import listProductsService from "../services/products/listAllProducts.service";
import listProductsByCategoryService from "../services/products/listProductsByCategory.service";
import deleteProductService from "../services/products/deleteProduct.service";
import updateProductService from "../services/products/updateProduct.service";
import listBuyProductService from "../services/products/listBuyProduct.service";

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
        seller_id: sellerId,
      });

      return res.status(201).json({ newProduct });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }

  static async listAll(req: Request, res: Response) {
    try {
      const products = await listProductsService();

      return res.status(200).json({
        products,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async listByCategory(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;

      const products = await listProductsByCategoryService(categoryId);

      return res.status(200).json({
        products,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const { productsId } = req.params;

      const updatedProduct = await updateProductService(productsId, req.body);

      return res.status(200).json({
        message: "Product updated!",
        product: updatedProduct,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const { productsId } = req.params;

      const deleteProduct = await deleteProductService(productsId);

      res.status(200).json({
        message: "Product deleted successfully",
        productDeleted: deleteProduct,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async listPurchasse(req: Request, res: Response) {
    try {
      const { Id } = req.params;

      const purchasseProduct = await listBuyProductService(
        Id
      );

      return res.status(200).json({
        status: 200,
        products: purchasseProduct,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
