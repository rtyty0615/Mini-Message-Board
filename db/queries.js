const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY id ASC");
  return rows;
}

async function getMessageById(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ]);
  return rows[0];
}

async function insertMessage(text, username) {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
    text,
    username,
  ]);
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage,
};
