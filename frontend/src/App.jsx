import { useState } from 'react'
import './App.css'
import Message from './components/Message';
import { PredefinedQuestion } from './components/PredefinedQuestion';
import { UserInput } from './components/UserInput';
import { PREDEFINED_QUESTIONS } from './data/predefined-questions.data'

const SERVER_URI = import.meta.env.VITE_API_URL;

function App() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const questionToSend = text || prompt;

    if (!questionToSend.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: questionToSend }]);


    try {
      const response = await fetch(`${SERVER_URI}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: questionToSend }),
      });

      const data = await response.json();

      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);

      // Scroll the messages container to bottom
      setTimeout(() => {
        const messagesContainer = document.querySelector('.messages-container');
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }, 10);

    } catch (error) {
      console.warn('Error:', error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Something went wrong!' }]);
    }
    setPrompt('');

  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Resume Chatbot</h1>

      <div className="w-full max-w-md bg-white p-4 rounded shadow">
        <div className="messages-container mb-4 h-64 overflow-y-auto border p-2 bg-gray-50">
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
        </div>

        <div className="flex">
          <UserInput onChange={setPrompt} onClick={handleSend} value={prompt} />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {PREDEFINED_QUESTIONS.map((question, index) => (
            <PredefinedQuestion key={index} question={question} onClick={() => handleSend(question)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App



