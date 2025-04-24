const mongoose = require("mongoose");

const recruiterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const RecruiterModel = mongoose.model("recruiter", recruiterSchema);

module.exports = {
  RecruiterModel,
};
