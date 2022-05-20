import { Router } from 'express';

const productsRoutes = Router();

productsRoutes.post('/:sellerID');
productsRoutes.get('/');
productsRoutes.get('/:category');
productsRoutes.patch('/:productsID');
productsRoutes.delete('/:productsID');

export default productsRoutes;
