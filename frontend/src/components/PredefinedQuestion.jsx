import React from 'react';

export const PredefinedQuestion = ({ question, onClick }) => {
    return <button
        onClick={() => onClick(onClick)}
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded text-sm"
    >
        {question}
    </button>
}
