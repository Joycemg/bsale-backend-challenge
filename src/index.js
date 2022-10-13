"use strict";
/* This is importing the express, cors, morgan, and dotenv/config modules. */
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import database from "./config/db.config.js";
import products_Router from "./routes/products.router.js";
import category_Router from "./routes/category.router.js";

/* This is creating a variable called app and setting it equal to express. This is also creating a
variable called port and setting it equal to the environment variable PORT or 3000. */
const app = express();
const port = process.env.PORT || 3000;

/* This is middleware. */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

/* This is router. */
app.use("/API/products", products_Router);
app.use("/API/category", category_Router);

/* Sending a response to the client. */
app.get("/", (req, res) => {
  res.send("API GO");
});

app.use("*", (req, res) => {
  return res.status(404).send("<h1>OPS! the endpoint does not exist :(</h1>");
});

/* This is a function that is listening for a port. */
app.listen(port, async () => {
  try {
    await database.authenticate();
    console.log(
      `The connection has been successfully established on port  ${port}`
    );
  } catch (err) {
    console.log("unexpected error \ns", err);
  }
});
