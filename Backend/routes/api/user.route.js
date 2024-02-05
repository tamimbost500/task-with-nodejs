const express = require("express");
const _ = express.Router();
const {
  AddUseInfoController,
  LoginUser,
  GetUserInfoContorller,
  UpdateUserInfo,
} = require("../../controller/Auth/AuthController");
const { verifiToken } = require("../../middleware/verifi_token");
const {
  GetSelectorsController,
} = require("../../controller/selectors/SelectorsController");
_.get("/user-info", verifiToken, GetUserInfoContorller);
_.patch("/update-user-info", verifiToken, UpdateUserInfo);
_.get("/all-selectors", GetSelectorsController);
_.post("/register", AddUseInfoController);
_.post("/login", LoginUser);

module.exports = _;
