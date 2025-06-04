# Resume Chatbot

## Description
A web application that allows users to interact with a chatbot specifically designed to answer questions about a resume. Users can either select from predefined questions or type their own queries to get information about the resume. 

### How it works:
1. The frontend shows an input the users can type in and a set of predefined questions they can click on
2. When a question is asked (either predefined or typed), the system:
   - First checks if it has predefined response (like "Hello there") as a full string match
   - If not, it looks for keywords in the question and matches them with the most relevant answer from a set of responses. For example, if you ask about "coding skills" or "programming experience", it'll tell you about the programming languages I know.
   - If no matches are found, it'll say it doesn't understand

If there is a different kind of error (e.g. network issues), it will display a "Something went wrong!" message.

## How to Run

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The backend will be available at `http://localhost:3000`

## Tech Stack

### Frontend
- React 
- Vite 
- TailwindCSS 


### Backend
- Node.js
- Express.js

## Environment Variables

### Frontend
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3000` |

### Backend
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | `3000` |

## Algorithm Optimizations
The chatbot's response system evolved from a simple keyword matching to a more sophisticated weighted scoring system:

### Initial Approach (Simple Matching)
```javascript
// First version used direct key-value pairs
const responses = {
  "about yourself": "Hi, I'm Dimitris...",
  "who are you": "Hi, I'm Dimitris...",
  "skills": "I'm skilled in Python...",
  // ...
};
```
This approach had limitations:
- Only exact matches would work
- No way to prioritize certain keywords

### Current Approach (Weighted Scoring)
```javascript
// Current version uses weighted keywords
const responses = [
  {
    "keywords": [
      { "label": "about yourself", "weight": 2 },
      { "label": "who are you", "weight": 2 }
    ],
    "answer": "Hi, I'm Dimitris..."
  }
];
```
Benefits of the new system:
- Multiple keywords per response
- Keywords have weights to indicate importance
- Better handling of similar questions through scoring|

## Architecture
```
📦resume-chatbot
 ┣ 📂backend
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜predefined-responses.js
 ┃ ┃ ┗ 📜responses.js
 ┃ ┣ 📂modules
 ┃ ┃ ┗ 📜chat.js
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜chat.routes.js
 ┃ ┣ 📜.env
 ┃ ┣ 📜.env.example
 ┃ ┣ 📜index.js
 ┃ ┣ 📜package-lock.json
 ┃ ┗ 📜package.json
 ┣ 📂frontend
 ┃ ┣ 📂public
 ┃ ┃ ┗ 📜vite.svg
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┗ 📜react.svg
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Message.jsx
 ┃ ┃ ┃ ┣ 📜PredefinedQuestion.jsx
 ┃ ┃ ┃ ┗ 📜UserInput.jsx
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┗ 📜predefined-questions.data.js
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┣ 📜App.jsx
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜main.jsx
 ┃ ┣ 📜.env
 ┃ ┣ 📜.env.example
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜README.md
 ┃ ┣ 📜eslint.config.js
 ┃ ┣ 📜index.html
 ┃ ┣ 📜package-lock.json
 ┃ ┣ 📜package.json
 ┃ ┣ 📜postcss.config.js
 ┃ ┣ 📜tailwind.config.js
 ┃ ┗ 📜vite.config.js
 ┣ 📜.gitignore
 ┗ 📜README.md
```

## Future Work
- UI is kind of basic, a lot can be done there
- We always start a new conversation, we dont store it anywhere, chatgpt can store multiple ones and a user can visit any of them any time.
- Cleanup (e.g. a lot of console.logs)