const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    name: {
      type: String,
    },
    subSelectorsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "SubSelectors",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Selectors = mongoose.model("Selectors", DataSchema);
module.exports = Selectors;
