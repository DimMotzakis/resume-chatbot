import { useState } from 'react'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (prompt.trim() === '') return;

    // Βάζουμε πρώτα το μήνυμα του χρήστη
    setMessages(prev => [...prev, { sender: 'user', text: prompt }]);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      // Προσθέτουμε την απάντηση του backend
      setMessages(prev => [...prev, { sender: 'bot', text: data.answer }]);

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Something went wrong!' }]);
    }

    setPrompt('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Resume Chatbot</h1>

      <div className="w-full max-w-md bg-white p-4 rounded shadow">
        <div className="mb-4 h-64 overflow-y-auto border p-2 bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block px-3 py-1 rounded ${msg.sender === 'user' ? 'bg-blue-200' : 'bg-green-200'}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-grow border p-2 rounded-l"
            placeholder="Type your question..."
          />
          <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded-r">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default App


