const {
  userInfoAddService,
  userLoginService,
  getSingleUserServices,
  updateSingleUserServices,
} = require("../../services/user.service");

exports.AddUseInfoController = async (req, res) => {
  try {
    const user = await userInfoAddService(req.body);

    if (user.error) {
      return res.send({ message: "error", error: user.error });
    } else {
      return res.send({ message: "successfully", data: user });
    }
  } catch (error) {
    return res.status(400).send({
      status: "fail",
      error: error.message,
    });
  }
};
exports.LoginUser = async (req, res) => {
  try {
    const user = await userLoginService(req.body);

    if (user.error) {
      return res.send({ message: "error", error: user.error });
    } else {
      return res.send({ message: "successfully", data: user });
    }
  } catch (error) {
    return res.status(400).send({
      status: "fail",
      error: error.message,
    });
  }
};

// Get user info

exports.GetUserInfoContorller = async (req, res) => {
  const userEmail = req.userEmail;
  try {
    const user = await getSingleUserServices(userEmail);

    return res.send({ message: "success", data: user });
  } catch (error) {
    return res.status(400).send({
      status: "fail",
      error: error.message,
    });
  }
};

// update user info

exports.UpdateUserInfo = async (req, res) => {
  const userEmail = req.userEmail;
  try {
    const user = await updateSingleUserServices(userEmail, req.body);

    return res.send({ message: "success", data: user });
  } catch (error) {
    return res.status(400).send({
      status: "fail",
      error: error.message,
    });
  }
};
