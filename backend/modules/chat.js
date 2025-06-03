const responses = require('../data/responses');
const predefinedResponses = require('../data/predefined-responses');


function normalize(text) {
  return text.toLowerCase().replace(/[^a-zA-Z\s]/g, "").trim();
}

function checkPredefinedQuestions(prompt) {
  const resp = predefinedResponses[prompt];
  if (resp) return resp;
  return null
}

const getResponse = async (prompt) => {

  const predefined = checkPredefinedQuestions(prompt);
  if (predefined != null) return predefined;

  let response = "Sorry, I don't understand.";
  const cleanedPrompt = normalize(prompt);
  let bestScore = 0;

  for (let resp of responses) {
    let tempScore = 0;
    for (let keyword of resp.keywords) {
      if (cleanedPrompt.includes(normalize(keyword.label))) {
        tempScore += keyword.weight;
      }
    }
    console.log(tempScore, bestScore);
    if (tempScore > bestScore) {
      bestScore = tempScore;
      response = resp.answer;
    }
  }
  return response;
};

module.exports = { getResponse };
