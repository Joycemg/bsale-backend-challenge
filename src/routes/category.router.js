import { Router } from "express";
const category_Router = Router();
category_Router.get("/", (req, res) => {
  res.send("category Router");
});
export default category_Router;
