const messageData = require("../models/messages");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessageById = async (req, res) => {
  const { messageId } = req.params;

  const message = await messageData.getMessageById(Number(messageId));

  if (!message) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("message", { title: "Message", message: message });
};

module.exports = { getMessageById };
