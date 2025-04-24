const mongoose = require("mongoose");
require("dotenv").config();

const recruiterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
  { timestamps: true }
);
const RecruiterModel = mongoose.model("Recruiter", recruiterSchema);

module.exports = {
  RecruiterModel,
};
