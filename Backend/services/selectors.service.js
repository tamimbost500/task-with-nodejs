const Selectors = require("../models/selectors.model");
const sub_subSelectors = require("../models/sub-subSelector.model");
const SubSelectors = require("../models/subSelectors.model");

exports.addSelectorsServices = async (data) => {
  const { name } = data;
  if (!name) {
    return { error: "Selectors name is required" };
  }
  const existingSelectors = await Selectors.findOne({ name });
  if (existingSelectors) {
    return { error: "Selectors is already exists" };
  }
  const selectors = await new Selectors(data).save();
  return selectors;
};
exports.addSubSelectorsServices = async (data) => {
  const { name, selectorsId } = data;
  if (!name) {
    return { error: "Selectors name is required" };
  }
  const existingSubSelectors = await SubSelectors.findOne({ name });
  if (existingSubSelectors) {
    return { error: "Selectors is already exists" };
  }
  const subSelectors = await new SubSelectors(data).save();
  const updatedSelectors = await Selectors.findOneAndUpdate(
    { _id: selectorsId },
    { $push: { subSelectorsId: subSelectors._id } },
    { new: true }
  );
  return subSelectors;
};
exports.addSub_SubSelectorsServices = async (data) => {
  const { name, subSelectorsId } = data;
  if (!name) {
    return { error: "Selectors name is required" };
  }
  const existingSubSelectors = await sub_subSelectors.findOne({ name });
  if (existingSubSelectors) {
    return { error: "Selectors is already exists" };
  }
  const sub_SubSelectors = await new sub_subSelectors(data).save();
  const updatedSelectors = await SubSelectors.findOneAndUpdate(
    { _id: subSelectorsId },
    { $push: { sub_subSelectorsId: sub_SubSelectors._id } },
    { new: true }
  );
  return sub_SubSelectors;
};

exports.getSelectorsServices = async () => {
  const result = await Selectors.find({})
    .populate({
      path: "subSelectorsId",
      select: "name",
      populate: {
        path: "sub_subSelectorsId",
        select: "name",
      },
    })
    .select("name");
  return result;
};
