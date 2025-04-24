const mongoose = require("mongoose");

const mongodbUrl =
  "mongodb+srv://akash:harale@cluster0.01kxxgp.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0";

const connectToDatabase = mongoose.connect(mongodbUrl);

module.exports = {
  connectToDatabase,
};
