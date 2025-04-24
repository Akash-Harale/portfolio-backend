const mongoose = require("mongoose");
require("dotenv").config();

const mongodbUrl = process.env.MONGODB_URL;

const connectToDatabase = mongoose.connect(mongodbUrl);

module.exports = {
  connectToDatabase,
};
