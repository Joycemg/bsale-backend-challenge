import { Router } from "express";
import { getProducts } from "../controllers/products.controller.js";

const products_Router = Router();

products_Router.get("/", getProducts);

export default products_Router;
