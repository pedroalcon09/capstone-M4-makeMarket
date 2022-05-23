import { Router } from 'express';

const sellerRouter = Router();

sellerRouter.post('/');
sellerRouter.get('/');
sellerRouter.get('/:sellerId');
sellerRouter.patch('/:sellerId');
sellerRouter.delete('/:sellerId');

export default sellerRouter;
