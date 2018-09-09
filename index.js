const express = require("express");

const mongoose = require("mongoose");
const keys = require("./config/keys.js");
require("./models/user.js");
require("./services/passport.js");
const app = express();

mongoose.connect(keys.mongooseURI);
require("./routes/auth_routes.js")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
