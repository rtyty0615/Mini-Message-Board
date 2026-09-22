const { Router } = require("express");
const newRouter = Router();
const messages = require("../models/messages");

newRouter.get("/", (req, res) => {
  res.render("new", { title: "New Message" });
});

newRouter.post("/", (req, res) => {
  console.log("Form Data Received:", req.body.message);
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = { newRouter };
