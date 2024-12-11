const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/books", router);

app.use(express.static(path.join(__dirname, "./client/build")));

// Build

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), (err) => {
    res.status(500).send(err);
  });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.l0eme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
