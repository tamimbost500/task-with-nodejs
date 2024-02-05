const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
// user add info services
exports.userInfoAddService = async (data) => {
  const { email, name, selectors, agree_to_terms } = data;
  if (!name) {
    return { error: { name: "Name is required" } };
  }
  if (!email) {
    return { error: { email: "Email is required" } };
  }

  if (!selectors) {
    return { error: { selectors: "Selectors is required" } };
  }
  if (!agree_to_terms) {
    return { error: { agree_to_terms: "Agree to terms is required" } };
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { error: "User already exists" };
  }

  const user = await new User(data).save();
  return user;
};

// user Login or Refill

exports.userLoginService = async (data) => {
  const { email, name, selectors, agree_to_terms } = data;

  if (!email) {
    return { error: { email: "Email is required" } };
  }
  if (!name) {
    return { error: { name: "Name is required" } };
  }
  if (!selectors) {
    return { error: { selectors: "Selectors is required" } };
  }
  if (!agree_to_terms) {
    return { error: { agree_to_terms: "Agree to terms is required" } };
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    // return existingUser;
    if (
      email === existingUser.email &&
      name === existingUser.name &&
      selectors === existingUser.selectors &&
      agree_to_terms === existingUser.agree_to_terms
    ) {
      const userData = { email: existingUser.email, userId: existingUser._id };
      const token = jwt.sign(userData, "secret", { expiresIn: "72h" });

      return { currentUser: existingUser, token };
    }
  } else {
    return { error: "User not found" };
  }
};
//
exports.getSingleUserServices = async (email) => {
  const result = await User.findOne({ email });
  return result;
};
exports.updateSingleUserServices = async (email, data) => {
  const { name, selectors } = data;

  if (!name) {
    return { error: { name: "Name is required" } };
  }
  if (!selectors) {
    return { error: { selectors: "Selectors is required" } };
  }

  const result = await User.findOneAndUpdate({ email }, data, { new: true });

  return result;
};
