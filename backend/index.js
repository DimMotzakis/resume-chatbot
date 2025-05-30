const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const responses = {
  "about yourself": "Hi, I'm Dimitris, a computer science student with solid knowledge in Informatics and programming.",
  "projects": "I've developed a static website, a simple 2D game and an Online Food Delivery app.",
  "skills": "I'm skilled in Python, Java, C++ and HTML.",
  "study": "I study Informatics at Athens University of Economics and Business.",
  "hobbies": "I enjoy spending time in nature, going to the beach, and hanging out with friends."
};

app.post('/chat', (req, res) => {
  const { prompt } = req.body;
  let response = "Sorry, I don't understand.";

  for (let keyword in responses) {
    if (prompt.toLowerCase().includes(keyword)) {
      response = responses[keyword];
      break;
    }
  }

  res.json({ reply: response });
});

// Εκκίνηση του server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});