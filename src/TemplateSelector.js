import './TemplateSelector.css';
import React, { useState } from 'react';

const TemplateSelector = ({ handleButtonClick }) => {
  const [inputText, setInputText] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick(inputText);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="template-selector-container">
      <label htmlFor="template-id" className="template-label">
        Meme template
        <div className="template-selector common-width">
          <input
            className="selector-text"
            placeholder="Enter Template ID"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="selector-button"
            onClick={() => handleButtonClick(inputText)}
          >
            Show Template
          </button>
        </div>
      </label>
    </div>
  );
};

export default TemplateSelector;
