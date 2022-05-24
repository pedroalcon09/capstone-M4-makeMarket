import { Router } from "express";

const categoriesRoutes = Router();

categoriesRoutes.post("/new");
categoriesRoutes.get("/");
categoriesRoutes.patch("/:categoryId");
categoriesRoutes.delete("/:categoryId");

export default categoriesRoutes;
