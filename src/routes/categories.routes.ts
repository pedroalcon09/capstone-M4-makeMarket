import { Router } from "express";

import CategoryController from "../controllers/categoryController.controller";
import { createCategorySchema } from "../Schemas/Category/createCategory.middleware";

import { validateMiddleware } from "../middlewares/Validation.middleware";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "/new",
  validateMiddleware(createCategorySchema),
  CategoryController.create
); // -- OK
categoriesRoutes.get("/", CategoryController.listAll); // -- OK
categoriesRoutes.patch("/:categoryId", CategoryController.update); // -- OK
categoriesRoutes.delete("/:categoryId", CategoryController.delete); // -- OK

export default categoriesRoutes;
