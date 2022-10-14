import { Router } from 'express';
import {
  productsByCategory,
  getCategories,
} from '../controllers/category.controller.js';

const categoryRouter = Router();

/* These are routers one gets the category by ID and the other all */
categoryRouter.get('/:categoryByID', productsByCategory);
categoryRouter.get('/', getCategories);

export default categoryRouter;
