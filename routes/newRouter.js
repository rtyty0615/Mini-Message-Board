const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("new", { title: "New Message" });
});

newRouter.post("/", (req, res) => {
  res.send("Data received!");
});

module.exports = { newRouter };
