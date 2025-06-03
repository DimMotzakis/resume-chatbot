import React from 'react';

const Message = ({ sender, text }) => {
    return (
        <div className={`mb-2 ${sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-1 rounded ${sender === 'user' ? 'bg-blue-200' : 'bg-green-200'}`}>
                {text}
            </span>
        </div>
    )
};

export default Message;