const express = require("express");
const _ = express.Router();
const User = require("./user.route");
const Seletors = require("./selector.route");

_.use("/user", User);
_.use("/admin", Seletors);

module.exports = _;
