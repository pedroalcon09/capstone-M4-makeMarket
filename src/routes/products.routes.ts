import { Router } from "express";

import ProductsController from "../controllers/productsController.controller";
import AuthCheckMiddleware from "../middlewares/AuthCheck.middleware";
import { productCreateSchema } from "../Schemas/Product/validateProductCreate.middleware";
import { productUpdateSchema } from "../Schemas/Product/validateProductUpdate.middleware";

import { validateMiddleware } from "../middlewares/Validation.middleware";

const productsRoutes = Router();

productsRoutes.post(
  "/:sellerId",
  AuthCheckMiddleware.seller,
  validateMiddleware(productCreateSchema),
  ProductsController.create
);
productsRoutes.get("/", ProductsController.listAll);
productsRoutes.get("/:categoryId", ProductsController.listByCategory);
productsRoutes.patch(
  "/:productsId",
  AuthCheckMiddleware.seller,
  validateMiddleware(productUpdateSchema),
  ProductsController.update
);
productsRoutes.delete(
  "/:productsId",
  AuthCheckMiddleware.seller,
  ProductsController.delete
);

export default productsRoutes;
