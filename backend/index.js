require("dotenv").config();

const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const helmet = require("helmet");
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable("x-powered-by");

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
const search = require("./routes/search");

app.use("/api/products/", product);
app.use("/api/users/", user);
app.use("/api/search", search);

// Custom 404 message
app.use((req, res, next) => {
  res.status(404).json({ error: "Page not found" });
});

// Custom errro handler message
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});
