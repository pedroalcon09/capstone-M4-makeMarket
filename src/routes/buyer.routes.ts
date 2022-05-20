import { Router } from 'express';

const buyerRoutes = Router();

buyerRoutes.post('/');
buyerRoutes.get('/');
buyerRoutes.get('/:buyerID');
buyerRoutes.patch('/:buyerID');
buyerRoutes.delete('/:buyerID');

export default buyerRoutes;
