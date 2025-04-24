const express = require("express");
const { connectToDatabase } = require("./db");
const { contactRouter } = require("./routes/contact.routes");
require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, async () => {
  try {
    await connectToDatabase;
    console.log("Server is running on port ", port);
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
});
