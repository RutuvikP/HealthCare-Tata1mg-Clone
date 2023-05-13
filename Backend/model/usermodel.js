const mongoose = require("mongoose");

const usershema = mongoose.Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const usermodel = mongoose.model("user", usershema);

module.exports = {
  usermodel,
};
