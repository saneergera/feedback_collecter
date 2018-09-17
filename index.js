const express = require("express");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const keys = require("./config/keys.js");
require("./models/user.js");
require("./services/passport.js");

const app = express();

mongoose.connect(keys.mongooseURI);

app.use(
  cookieSession({
    keys: [keys.cookieKey],
    maxAge: 24 * 60 * 60 * 1000
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

require("./routes/auth_routes.js")(app);
require("./routes/payments")(app);

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("./client/build"));

  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
