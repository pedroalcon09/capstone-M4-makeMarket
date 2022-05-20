import { Router } from 'express';

const sellerRouter = Router();

sellerRouter.post('/');
sellerRouter.get('/');
sellerRouter.get('/:sellerID');
sellerRouter.patch('/:sellerID');
sellerRouter.delete('/:sellerID');

export default sellerRouter;
