import { Router } from "express";

import ProductsController from "../controllers/productsController.controller";

const productsRoutes = Router();

productsRoutes.post("/:sellerId", ProductsController.create);
productsRoutes.get("/", ProductsController.listAll);
productsRoutes.get("/:categoryId", ProductsController.listByCategory);
productsRoutes.patch("/:productsId", ProductsController.update);
productsRoutes.delete("/:productsId", ProductsController.delete);

export default productsRoutes;
