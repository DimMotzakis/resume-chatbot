import React from 'react';

export const UserInput = ({ onChange, onClick, value }) => {
    return <>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-grow border p-2 rounded-l"
            placeholder="Type your question..."
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
        />
        <button onClick={() => onClick()} className="bg-blue-500 text-white px-4 rounded-r">
            Send
        </button>
    </>
}