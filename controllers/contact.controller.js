const { response } = require("express");
const { AddNewMessage } = require("../models/contact.model");

const addNewMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newMessage = new AddNewMessage(req.body);
    await newMessage.save();
    return res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addNewMessage,
};
