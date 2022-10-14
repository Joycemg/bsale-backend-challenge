import { Router } from "express";
import {
  productsByCategory,
  getCategories,
} from "../controllers/category.controller.js";

const category_Router = Router();

/* These are routers one gets the category by ID and the other all*/
category_Router.get("/:categoryByID", productsByCategory);
category_Router.get("/", getCategories);

export default category_Router;
