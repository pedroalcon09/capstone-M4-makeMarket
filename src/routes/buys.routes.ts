import { Router } from "express";

import BuysController from "../controllers/buysController.controller";

const buysRoutes = Router();

buysRoutes.post("/:buyerId/:productID", BuysController.create);
buysRoutes.delete("/:buyId", BuysController.delete);
buysRoutes.patch("/:buyId/pay", BuysController.update);

export default buysRoutes;
