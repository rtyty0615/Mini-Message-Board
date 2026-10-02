const { Router } = require("express");
const indexRouter = Router();
const db = require("../db/queries");

indexRouter.get("/", async (req, res, next) => {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Message Board", messages: messages });
  } catch (error) {
    next(error);
  }
});

module.exports = { indexRouter };
