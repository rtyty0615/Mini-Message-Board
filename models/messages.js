const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

let idNum = 3;

const counter = {
  get value() {
    return idNum;
  },
  increment() {
    idNum += 1;
  },
};

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

module.exports = { messages, counter, getMessageById };
