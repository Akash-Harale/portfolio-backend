const express = require("express");

const recruiterRouter = express.Router();

recruiterRouter.post("/add", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newRecruiter = {
    name,
    email,
    subject,
    message,
  };

  res.status(201).send(newRecruiter);
});

module.exports = { recruiterRouter };
