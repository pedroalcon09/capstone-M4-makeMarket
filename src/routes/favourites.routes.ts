import { Router } from "express";

import favoriteController from "../controllers/favoriteController.controller";

const favouritesRoutes = Router();

favouritesRoutes.post("/:buyerId/:productId", favoriteController.create);
favouritesRoutes.get("/:buyerId", favoriteController.list);
favouritesRoutes.delete("/:buyerId/:productId", favoriteController.delete);

export default favouritesRoutes;
