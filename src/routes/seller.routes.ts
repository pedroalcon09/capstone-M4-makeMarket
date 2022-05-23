import { Router } from "express";

import SellerController from "../controllers/sellerController.controller";

const sellerRouter = Router();

sellerRouter.post("/login", SellerController.login);
sellerRouter.post("/", SellerController.create);
sellerRouter.get("/", SellerController.listAll);
sellerRouter.get("/:sellerID", SellerController.listById);
sellerRouter.patch("/:sellerID", SellerController.update);
sellerRouter.delete("/:sellerID", SellerController.delete);

export default sellerRouter;
