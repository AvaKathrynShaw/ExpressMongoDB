const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  email: {
    type: String,
    requires: true
  },
  driving: {
    type: Boolean,
    default: false
  }
});
