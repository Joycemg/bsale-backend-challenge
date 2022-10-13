"use strict";
/* This is importing the express, cors, morgan, and dotenv/config modules. */
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

/* This is creating a variable called app and setting it equal to express. This is also creating a
variable called port and setting it equal to the environment variable PORT or 3000. */
const app = express();
const port = process.env.PORT || 3000;

/* This is middleware. */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

/* Sending a response to the client. */
app.get("/", (req, res) => {
  res.send("API GO");
});

/* This is a function that is listening for a port. */
app.listen(port, () => {
  try {
    console.log(`Listening on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
