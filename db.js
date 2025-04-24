const mongoose = require("mongoose");
require("dotenv").config();

const mongodbUrl = process.env.MONGODB_URL;

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongodbUrl);
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = { connectToDatabase };
