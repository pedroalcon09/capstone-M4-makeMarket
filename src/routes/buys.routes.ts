import { Router } from "express";

const buysRoutes = Router();

buysRoutes.post("/:buyerId/:productID");
buysRoutes.delete("/:buyerId/pay");
buysRoutes.get("/:buyId");

export default buysRoutes;
