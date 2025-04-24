const express = require("express");
const { RecruiterModel } = require("../models/recruiter.model");

const recruiterRouter = express.Router();

recruiterRouter.post("/add", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const recruiter = new RecruiterModel(req.body);
    await recruiter.save();
    res.status(201).json({ message: "Recruiter added successfully" });
  } catch (error) {
    console.error("Error adding recruiter:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = { recruiterRouter };
