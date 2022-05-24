import { Request, Response, NextFunction } from "express";

import createCategoryService from "../services/category/createCategory.service";
import listCategoryService from "../services/category/listCategory.service";
import categoryUpdateService from "../services/category/updateCategory.service";
import deleteCategoryService from "../services/category/deleteCategory.service";
import { AppError, handleError } from "../errors/appError";

export default class CategoryController {
  static async create(req: Request, res: Response) {
    try {
      const category = await createCategoryService(req.body);

      return res.status(201).json({
        status: 201,
        message: "Category created!",
        category: category,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }

  static async listAll(req: Request, res: Response) {
    try {
      const categories = await listCategoryService();

      return res.status(200).json({
        status: 200,
        categories: categories,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;
      const { name } = req.body;

      const updatedCategory = await categoryUpdateService(categoryId, name);

      return res.status(200).json({
        status: 201,
        message: "Category updated",
        category: { updatedCategory },
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;

      const deletedCategory = await deleteCategoryService(categoryId);

      return res.status(200).json({
        status: 200,
        message: "Category deleted!",
        deleted: deletedCategory,
      });
    } catch (err) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
}
