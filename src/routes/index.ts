import { Router } from "express";
import buyerRoutes from "./buyer.routes";
import buysRoutes from "./buys.routes";
import categoriesRoutes from "./categories.routes";
import productsRoutes from "./products.routes";
import sellerRouter from "./seller.routes";

const routes = Router();

routes.use("/seller", sellerRouter);
routes.use("/buyer", buyerRoutes);
routes.use("/products", productsRoutes);
routes.use("/categories", categoriesRoutes);
routes.use("/buy", buysRoutes);

export default routes;
