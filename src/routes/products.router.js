import { Router } from "express";
const products_Router = Router();
products_Router.get("/", (req, res) => {
  res.send("products Router");
});
export default products_Router;
