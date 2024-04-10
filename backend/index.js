const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const product = require("./routes/product");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/", product);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
