import { Router } from 'express';

const buysRoutes = Router();

buysRoutes.post('/:buyerID/:productID');
buysRoutes.delete('/:buyerID/pay');
buysRoutes.get('/:buyID');

export default buysRoutes;
