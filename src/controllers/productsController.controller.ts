import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import createProductService from "../services/products/createProduct.service";
import listProductsService from "../services/products/listAllProducts.service";
import listProductsByCategoryService from "../services/products/listProductsByCategory.service";
import deleteProductService from "../services/products/deleteProduct.service";
import updateProductService from "../services/products/updateProduct.service";

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
        status: 200,
        products: products,
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

      const productsByCategory = await listProductsByCategoryService(
        categoryId
      );

      return res.status(200).json({
        status: 200,
        products: productsByCategory,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const { product_id } = req.params;

      const updatedProduct = await updateProductService(product_id, req.body);

      return res.status(200).json({
        status: 200,
        message: "Product updated!",
        buyer: updatedProduct,
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

      const deleteProduct = await deleteProductService(product_id);

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
}
