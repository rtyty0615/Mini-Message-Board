const { Router } = require("express");
const messageRouter = Router();
const { getMessageById } = require("../controllers/messageController");

messageRouter.get("/:messageId", getMessageById);
module.exports = { messageRouter };
