import { Router } from 'express';
import { getProducts, getProduct } from '../controllers/products.controller.js';

const productsRouter = Router();

/* These are routers, one gets one product per ID and the other gets all */
productsRouter.get('/:productByID', getProduct);
productsRouter.get('/', getProducts);

export default productsRouter;
