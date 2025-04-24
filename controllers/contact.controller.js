const { response } = require("express");
const { AddNewMessage } = require("../models/contact.model");

const addNewMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newMessage = new AddNewMessage(req.body);
  newMessage.save((err, response) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      res.status(200).send(response);
    }
  });
  res.status(200).send("Message sent successfully");
};

module.exports = {
  addNewMessage,
};
