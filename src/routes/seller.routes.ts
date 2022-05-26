import { Router } from "express";

import SellerController from "../controllers/sellerController.controller";
import AuthCheckMiddleware from "../middlewares/AuthCheck.middleware";
import { sellerUpdateSchema } from "../Schemas/Seller/updateSeller.middleware";
import { sellerCreateSchema } from "../Schemas/Seller/validateSellerCreate.middleware";
import { sellerLoginSchema } from "../Schemas/Seller/validateSellerLogin.middleware";

import { validateMiddleware } from "../middlewares/Validation.middleware";

const sellerRouter = Router();

sellerRouter.post(
  "/login",
  validateMiddleware(sellerLoginSchema),
  SellerController.login
);
sellerRouter.post(
  "/",
  validateMiddleware(sellerCreateSchema),
  SellerController.create
);
sellerRouter.get("/", SellerController.listAll);
sellerRouter.get(
  "/:sellerId",
  AuthCheckMiddleware.seller,
  SellerController.listById
);
sellerRouter.patch(
  "/:sellerId",
  validateMiddleware(sellerUpdateSchema),
  AuthCheckMiddleware.seller,
  SellerController.update
);
sellerRouter.delete(
  "/:sellerId",
  AuthCheckMiddleware.seller,
  SellerController.delete
);

export default sellerRouter;
