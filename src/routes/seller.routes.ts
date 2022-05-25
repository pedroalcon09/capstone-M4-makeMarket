import { Router } from "express";

import SellerController from "../controllers/sellerController.controller";
import AuthCheckMiddleware from "../middlewares/AuthCheck.middleware";

const sellerRouter = Router();

sellerRouter.post("/login", SellerController.login);
sellerRouter.post("/", SellerController.create);
sellerRouter.get("/", SellerController.listAll);
sellerRouter.get(
  "/:sellerId",
  AuthCheckMiddleware.seller,
  SellerController.listById
);
sellerRouter.patch(
  "/:sellerId",
  AuthCheckMiddleware.seller,
  SellerController.update
);
sellerRouter.delete(
  "/:sellerId",
  AuthCheckMiddleware.seller,
  SellerController.delete
);

export default sellerRouter;
