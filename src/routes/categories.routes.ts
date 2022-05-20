import { Router } from 'express';

const categoriesRoutes = Router();

categoriesRoutes.post('/new');
categoriesRoutes.delete('/:categoryID');
categoriesRoutes.get('/');

export default categoriesRoutes;
