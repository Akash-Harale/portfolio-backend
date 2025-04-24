const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db");
const { recruiterRouter } = require("./routes/recruiter.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/recruiter", recruiterRouter);

app.listen(4000, async () => {
  try {
    await connectToDatabase;
    console.log("Connected to MongoDB");
    console.log("Server is running on port 3000");
  } catch (error) {
    console.log("Error starting server:", error);
  }
});
