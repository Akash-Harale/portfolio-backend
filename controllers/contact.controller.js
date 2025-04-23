const { ContactModel } = require("../models/contact.model");

const contact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Simple validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Save contact message to the database
    const newContact = new ContactModel({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    // Send a response
    return res.status(201).json({ message: "Message sent successfully." });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = {
  contact,
};
