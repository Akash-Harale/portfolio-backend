const express = require("express");
const cors = require("cors");
const router = require("./routes/recruiter.routes");
const { connectToDatabase } = require("./db");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.use("/recruiter", router);

app.listen(4000, async () => {
  try {
    await connectToDatabase();
    console.log("Connected to the database");
    console.log("Server is running on port 4000");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
});
