import { Router } from "express";
import BuyerController from "../controllers/buyerController.controller";
import { authCheck } from "../middlewares/AuthCheck.middleware";

const buyerRoutes = Router();

//Middleware de authenticação não funciona ainda

buyerRoutes.post("/", BuyerController.create); // -- OK
buyerRoutes.post("/login", BuyerController.login); // -- OK
buyerRoutes.get("/", BuyerController.listAll); // -- OK
buyerRoutes.get("/:buyerId", authCheck, BuyerController.listById); // -- OK
buyerRoutes.patch("/:buyerId", authCheck, BuyerController.update); // -- OK
buyerRoutes.delete("/:buyerId", authCheck, BuyerController.delete); // -- OK

export default buyerRoutes;
