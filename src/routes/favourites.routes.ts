import { Router } from "express";

const favouritesRoutes = Router();

favouritesRoutes.post("/:buyerId/:productId");
favouritesRoutes.delete("/:buyerId/:productId");
favouritesRoutes.get("/:buyerId");

export default favouritesRoutes;
