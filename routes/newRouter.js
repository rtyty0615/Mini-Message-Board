const { Router } = require("express");
const newRouter = Router();
const db = require("../db/queries");

newRouter.get("/", (req, res) => {
  res.render("new", { title: "New Message" });
});

newRouter.post("/", async (req, res, next) => {
  try {
    const { message, user } = req.body;
    await db.insertMessage(message, user);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = { newRouter };
