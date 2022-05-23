import { Router } from "express";
import BuyerController from "../controllers/buyerController.controller";
import AuthCheckMiddleware from "../middlewares/AuthCheck.middleware";

const buyerRoutes = Router();

//Middleware de authenticação não funciona ainda

buyerRoutes.post("/", BuyerController.create); // -- OK
buyerRoutes.post("/login", BuyerController.login); // -- OK
buyerRoutes.get("/", BuyerController.listAll); // -- OK
buyerRoutes.get("/:buyerId", AuthCheckMiddleware.buyer, BuyerController.listById); // -- OK
buyerRoutes.patch("/:buyerId", AuthCheckMiddleware.buyer, BuyerController.update); // -- OK
buyerRoutes.delete("/:buyerId", AuthCheckMiddleware.buyer, BuyerController.delete); // -- OK

export default buyerRoutes;
