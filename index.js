const express = require("express");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
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

require("./routes/auth_routes.js")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
