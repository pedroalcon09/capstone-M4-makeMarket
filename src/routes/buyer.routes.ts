import { Router } from "express";
import BuyerController from "../controllers/buyerController.controller";
import AuthCheckMiddleware from "../middlewares/AuthCheck.middleware";
import { buyerCreateSchema } from "../Schemas/Buyer/validateBuyerCreate.middleware";
import { buyerLoginSchema } from "../Schemas/Buyer/validateBuyerLogin.middleware";
import { buyerUpdateSchema } from "../Schemas/Buyer/validateBuyerUpdate.middleware";

import { validateMiddleware } from "../middlewares/Validation.middleware";

const buyerRoutes = Router();

buyerRoutes.post(
  "/",
  validateMiddleware(buyerCreateSchema),
  BuyerController.create
); // -- OK
buyerRoutes.post(
  "/login",
  validateMiddleware(buyerLoginSchema),
  BuyerController.login
); // -- OK
buyerRoutes.get("/", BuyerController.listAll); // -- OK
buyerRoutes.get(
  "/:buyerId",
  AuthCheckMiddleware.buyer,
  BuyerController.listById
); // -- OK
buyerRoutes.patch(
  "/:buyerId",
  validateMiddleware(buyerUpdateSchema),
  AuthCheckMiddleware.buyer,
  BuyerController.update
); // -- OK
buyerRoutes.delete(
  "/:buyerId",
  AuthCheckMiddleware.buyer,
  BuyerController.delete
); // -- OK
/* 
buyerRoutes.post(
  "/:buyerId/favourite/:productId",
  AuthCheckMiddleware.buyer,
  BuyerController.addToFavourite
);

buyerRoutes.get(
  "/:buyerId/favourite",
  AuthCheckMiddleware.buyer,
  BuyerController.listFavourite
);

buyerRoutes.delete(
  "/:buyerId/favourite/:productId",
  AuthCheckMiddleware.buyer,
  BuyerController.removeFromFavourite
);
 */
export default buyerRoutes;
