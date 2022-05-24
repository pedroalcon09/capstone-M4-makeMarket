import { Router } from "express";

import ProductsController from "../controllers/productsController.controller";

const productsRoutes = Router();

productsRoutes.post("/:sellerID", ProductsController.create);
productsRoutes.get("/", ProductsController.listAll);
productsRoutes.get("/:category", ProductsController.listByCategory);
productsRoutes.patch("/:productsID", ProductsController.update);
productsRoutes.delete("/:productsID", ProductsController.delete);

export default productsRoutes;
