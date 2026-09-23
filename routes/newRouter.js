const { Router } = require("express");
const newRouter = Router();
const { messages, counter } = require("../models/messages");

newRouter.get("/", (req, res) => {
  res.render("new", { title: "New Message" });
});

newRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
    id: counter.value,
  });
  counter.increment();
  res.redirect("/");
});

module.exports = { newRouter };
