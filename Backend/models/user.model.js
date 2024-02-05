const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    selectors: {
      type: String,
      required: true,
    },
    agree_to_terms: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", DataSchema);
module.exports = User;
