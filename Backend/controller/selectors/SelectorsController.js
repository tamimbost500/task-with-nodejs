const {
  addSelectorsServices,
  addSubSelectorsServices,
  getSelectorsServices,
  addSub_SubSelectorsServices,
} = require("../../services/selectors.service");

exports.AddSelectorsController = async (req, res) => {
  try {
    const selectors = await addSelectorsServices(req.body);
    if (selectors.error) {
      return res.send({ message: "error", error: selectors.error });
    } else {
      return res.send({ message: "successfully", data: selectors });
    }
  } catch (error) {
    return res.status(400).send({
      status: "fail",
      error: error.message,
    });
  }
};
exports.AddSubSelectorsController = async (req, res) => {
  try {
    const subSelectors = await addSubSelectorsServices(req.body);
    if (subSelectors.error) {
      return res.send({ message: "error", error: subSelectors.error });
    } else {
      return res.send({ message: "successfully", data: subSelectors });
    }
  } catch (error) {
    return res.status(400).send({
      status: "fail",
      error: error.message,
    });
  }
};
exports.Add_Sub_SubSelectorsController = async (req, res) => {
  try {
    const subSelectors = await addSub_SubSelectorsServices(req.body);
    if (subSelectors.error) {
      return res.send({ message: "error", error: subSelectors.error });
    } else {
      return res.send({ message: "successfully", data: subSelectors });
    }
  } catch (error) {
    return res.status(400).send({
      status: "fail",
      error: error.message,
    });
  }
};
exports.GetSelectorsController = async (req, res) => {
  try {
    const allSelectors = await getSelectorsServices();
    return res.send({ message: "success", data: allSelectors });
  } catch (error) {
    return res.status(400).send({
      status: "fail",
      error: error.message,
    });
  }
};
