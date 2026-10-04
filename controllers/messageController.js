const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const { body, validationResult, matchedData } = require("express-validator");

const validateMessage = [
  body("user")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters."),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message text is required.")
    .isLength({ min: 1, max: 255 })
    .withMessage("Message must be under 255 characters."),
];

const createMessagePost = [
  validateMessage,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("new", {
        title: "New Message",
        errors: errors.array(),
        formData: req.body,
      });
    }

    const { message, user } = matchedData(req);

    try {
      await db.insertMessage(message, user);
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  },
];

const getMessageById = async (req, res) => {
  const { messageId } = req.params;

  const message = await db.getMessageById(Number(messageId));

  if (!message) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("message", { title: "Message", message: message });
};

module.exports = { getMessageById, createMessagePost };
