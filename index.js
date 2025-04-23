const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectToDatabase } = require("./db");
const { contactRouter } = require("./routes/contact.routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Contact API");
});

// Start server
app.listen(PORT, () => {
  try {
    connectToDatabase();
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
