const key = require("../config/keys");
var stripe = require("stripe")(key.secretKey);
const requireLogin = require("../middlewear/requireLogin");

module.exports = function(App) {
  App.post("/api/stripe", requireLogin, async function(req, res) {
    const charge = await stripe.charges.create({
      amount: 5000,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id // obtained with Stripe.js
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
