import { Router } from "express";

import ProductsController from "../controllers/productsController.controller";
import AuthCheckMiddleware from "../middlewares/AuthCheck.middleware";
import {
  productCreateSchema,
  validateProductCreate,
} from "../middlewares/Product/validateProductCreate.middleware";
import {
  productUpdateSchema,
  validateProductUpdate,
} from "../middlewares/Product/validateProductUpdate.middleware";

const productsRoutes = Router();

productsRoutes.post(
  "/:sellerId",
  AuthCheckMiddleware.seller,
  validateProductCreate(productCreateSchema),
  ProductsController.create
);
productsRoutes.get("/", ProductsController.listAll);
productsRoutes.get("/:categoryId", ProductsController.listByCategory);
productsRoutes.patch(
  "/:productsId",
  AuthCheckMiddleware.seller,
  validateProductUpdate(productUpdateSchema),
  ProductsController.update
);
productsRoutes.delete(
  "/:productsId",
  AuthCheckMiddleware.seller,
  ProductsController.delete
);

export default productsRoutes;
