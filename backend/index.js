const express = require("express");
const app = express();
const port = 5000;

const databaseURL = require("./db.connect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("Connected to the database.");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

const product = require("./routes/product");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/", product);
