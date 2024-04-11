const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const { databaseURL, databaseName } = require("./db.connect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoose = require("mongoose");

mongoose
  .connect(databaseURL, { dbName: databaseName })
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

app.use("/api/p/", product);
app.use("/api/u/", user);
