import { Router } from 'express';

const favouritesRoutes = Router();

favouritesRoutes.post('/:buyerID/:productID');
favouritesRoutes.delete('/:buyerID/:productID');
favouritesRoutes.get('/:buyerID');

export default favouritesRoutes;
