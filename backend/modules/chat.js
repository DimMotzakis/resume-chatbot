const responses = require('../data/responses');

function normalize(text) {
  return text.toLowerCase().replace(/[^a-zA-Z\s]/g, "").trim();
}

const getResponse = async (prompt) => {
  let response = "Sorry, I don't understand.";
  const cleanedPrompt = normalize(prompt);

  for (let keyword in responses) {
    if (cleanedPrompt.includes(normalize(keyword))) {
      response = responses[keyword];
      break;
    }
  }
  return response;
};

module.exports = { getResponse };
