import { Router } from 'express';

const routes = Router();

routes.use('/seller');
routes.use('/buyer');
routes.use('/products');
routes.use('/categories');
routes.use('/favorites');
routes.use('/buy');

export default routes;
