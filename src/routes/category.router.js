import { Router } from "express";
import {
  productsByCategory,
  getCategories,
} from "../controllers/category.controller.js";

const category_Router = Router();

/* This is a router that is getting the category by ID and then getting the categories. */
category_Router.get("/:categoryByID", productsByCategory);
category_Router.get("/", getCategories);

export default category_Router;
