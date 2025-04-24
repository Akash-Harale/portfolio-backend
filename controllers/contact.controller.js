const { AddNewMessage } = require("../models/contact.model");

const addNewMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newMessage = new AddNewMessage({ name, email, subject, message });
    console.log(newMessage);
    await newMessage.save();
    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.error("error while storing data to database:", error);
    return res
      .status(500)
      .json({ error: "error while storing data to database" });
  }
};

module.exports = {
  addNewMessage,
};
