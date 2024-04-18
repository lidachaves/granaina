require("dotenv").config();

const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONG_URI, { dbName: process.env.MONG_DB })
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
const user = require("./routes/user");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products/", product);
app.use("/api/users/", user);
