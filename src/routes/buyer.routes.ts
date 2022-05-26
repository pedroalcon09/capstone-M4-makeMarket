import { Router } from "express";
import BuyerController from "../controllers/buyerController.controller";
import AuthCheckMiddleware from "../middlewares/AuthCheck.middleware";
import {
  buyerCreateSchema,
  validateBuyerCreate,
} from "../middlewares/Buyer/validateBuyerCreate.middleware";
import {
  buyerLoginSchema,
  validateBuyerLogin,
} from "../middlewares/Buyer/validateBuyerLogin.middleware";
import {
  buyerUpdateSchema,
  validateBuyerUpdate,
} from "../middlewares/Buyer/validateBuyerUpdate.middleware";

const buyerRoutes = Router();

buyerRoutes.post(
  "/",
  validateBuyerCreate(buyerCreateSchema),
  BuyerController.create
); // -- OK
buyerRoutes.post(
  "/login",
  validateBuyerLogin(buyerLoginSchema),
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
  validateBuyerUpdate(buyerUpdateSchema),
  AuthCheckMiddleware.buyer,
  BuyerController.update
); // -- OK
buyerRoutes.delete(
  "/:buyerId",
  AuthCheckMiddleware.buyer,
  BuyerController.delete
); // -- OK
buyerRoutes.post("/:buyerId/favourite/:productId", BuyerController.addToFavorite)
buyerRoutes.get("/:buyerId/favourite", BuyerController.listFavorites)
buyerRoutes.delete("/:buyerId/favourite/:productId", BuyerController.removeFromFavorite)

export default buyerRoutes;

/* 
import { Router } from "express";

import favoriteController from "../controllers/favoriteController.controller";

const favouritesRoutes = Router();

favouritesRoutes.post("/:buyerId/:productId", favoriteController.create);
favouritesRoutes.get("/:buyerId", favoriteController.list);
favouritesRoutes.delete("/:buyerId/:productId", favoriteController.delete);

export default favouritesRoutes;
 */
