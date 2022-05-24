import { Router } from "express";

import CategoryController from "../controllers/categoryController.controller";

const categoriesRoutes = Router();

categoriesRoutes.post("/new", CategoryController.create); // -- OK
categoriesRoutes.get("/", CategoryController.listAll); // -- OK
categoriesRoutes.patch("/:categoryId", CategoryController.update); // -- OK
categoriesRoutes.delete("/:categoryId", CategoryController.delete); // -- OK

export default categoriesRoutes;
