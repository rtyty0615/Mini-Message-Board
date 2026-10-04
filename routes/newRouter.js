const { Router } = require("express");
const newRouter = Router();
const messagesController = require("../controllers/messageController");

newRouter.get("/", (req, res) => {
  res.render("new", { title: "New Message" });
});

newRouter.post("/", messagesController.createMessagePost);

module.exports = { newRouter };
