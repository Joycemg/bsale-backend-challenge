import { Router } from "express";
import { getProducts, getProduct } from "../controllers/products.controller.js";

const products_Router = Router();

products_Router.get("/:productByID", getProduct);
products_Router.get("/", getProducts);

export default products_Router;
