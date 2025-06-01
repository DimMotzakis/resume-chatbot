const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const responses = {
  "about yourself": "Hi, I'm Dimitris, a computer science student with solid knowledge in Informatics and programming.",
  "who are you": "Hi, I'm Dimitris, a computer science student with solid knowledge in Informatics and programming.",
  
  "projects": "I've developed a static website, a simple 2D game and an Online Food Delivery app.",
  "worked on": "I've developed a static website, a simple 2D game and an Online Food Delivery app.",
  
  "skills": "I'm skilled in Python, Java, C++ and HTML.",
  "expertise": "I'm skilled in Python, Java, C++ and HTML.",
  
  "study": "I study Informatics at Athens University of Economics and Business.",
  "education": "I study Informatics at Athens University of Economics and Business.",
  
  "hobbies": "I enjoy spending time in nature, going to the beach, and hanging out with friends.",
  "interests": "I enjoy spending time in nature, going to the beach, and hanging out with friends.",

  "work experience": "I worked for 6 months as IT Support at the Development Agency of Heraklion.",
  "job": "I worked for 6 months as IT Support at the Development Agency of Heraklion.",

  "favorite project": "My favorite project is the 2D game I developed in C++.",
  "best project": "My favorite project is the 2D game I developed in C++.",

  "languages": "I speak English and French.",
  "foreign languages": "I speak English and French."
};

// βοηθητική συνάρτηση για πιο «έξυπνη» ανάλυση
function normalize(text) {
  return text.toLowerCase().replace(/[^a-zA-Z\s]/g, "").trim();
}

app.post('/chat', (req, res) => {
  const { prompt } = req.body;
  const cleanedPrompt = normalize(prompt);

  let response = "Sorry, I don't understand.";

  for (let keyword in responses) {
    if (cleanedPrompt.includes(normalize(keyword))) {
      response = responses[keyword];
      break;
    }
  }

  res.json({ reply: response });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
