const express = require("express");
const _ = express.Router();
const {
  AddSelectorsController,
  AddSubSelectorsController,
  Add_Sub_SubSelectorsController,
} = require("../../controller/selectors/SelectorsController");

_.post("/add-selectors", AddSelectorsController);
_.post("/add-sub-selectors", AddSubSelectorsController);
_.post("/add-sub-subSelectors", Add_Sub_SubSelectorsController);
module.exports = _;
