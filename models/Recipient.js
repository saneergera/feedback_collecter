const mongoose = require("mongoose");
const { Schema } = mongoose;

const Recipients = new Schema({
  email: String,

  respondend: {
    type: Boolean,
    default: false
  }
});

module.exports = Recipients;
