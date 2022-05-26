import { Router } from "express";

import BuysController from "../controllers/buysController.controller";
import AuthCheckMiddleware from "../middlewares/AuthCheck.middleware";

const buysRoutes = Router();

buysRoutes.post("/:buyerId/:productId", BuysController.create);
buysRoutes.get("/:buyerId", BuysController.list);
buysRoutes.patch("/:buyId/pay", BuysController.update);
buysRoutes.delete("/:buyId", BuysController.delete);

export default buysRoutes;
