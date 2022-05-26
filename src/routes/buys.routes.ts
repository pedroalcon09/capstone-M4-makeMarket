import { Router } from "express";

import BuysController from "../controllers/buysController.controller";
import AuthCheckMiddleware from "../middlewares/AuthCheck.middleware";
import { validateMiddleware } from "../middlewares/Validation.middleware";
import { paymentSchema } from "../Schemas/Buys/validatePayment.middleware";

const buysRoutes = Router();

buysRoutes.post(
  "/:buyerId/:productId",
  AuthCheckMiddleware.buyer,
  BuysController.create
);

buysRoutes.get("/:buyerId", AuthCheckMiddleware.buyer, BuysController.list);

buysRoutes.patch(
  "/:buyerId/:buyId/pay",
  validateMiddleware(paymentSchema),
  AuthCheckMiddleware.buyer,
  BuysController.update
);

buysRoutes.delete(
  "/:buyerId/delete/:buyId",
  AuthCheckMiddleware.buyer,
  BuysController.delete
);

export default buysRoutes;
