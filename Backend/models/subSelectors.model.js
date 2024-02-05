const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    name: {
      type: String,
    },
    selectorsId: {
      type: Schema.Types.ObjectId,
      ref: "Selectors",
    },
    sub_subSelectorsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "sub-subSelectors",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const SubSelectors = mongoose.model("SubSelectors", DataSchema);
module.exports = SubSelectors;
