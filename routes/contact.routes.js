const express = require("express");
const { addNewMessage } = require("../controllers/contact.controller");

const contactRouter = express.Router();

contactRouter.post("/newmessage", addNewMessage);

module.exports = {
  contactRouter,
};
