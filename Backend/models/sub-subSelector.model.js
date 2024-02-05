const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    name: {
      type: String,
    },
    subSelectorsId: {
      type: Schema.Types.ObjectId,
      ref: "SubSelectors",
    },
  },
  {
    timestamps: true,
  }
);
const sub_subSelectors = mongoose.model("sub-subSelectors", DataSchema);
module.exports = sub_subSelectors;
