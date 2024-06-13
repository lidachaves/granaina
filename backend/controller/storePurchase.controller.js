const { Purchase } = require("../model/payment.model");
const User = require("../model/user.model");

async function clientsPurchases(req, res) {
  try {
    const user = req.user;
    const purchases = await Purchase.find({ store: user.id });
    res.status(200).send(purchases);
  } catch (e) {
    console.log(e)
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

module.exports = { clientsPurchases };