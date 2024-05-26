import React, { useState } from 'react';

const SelectorText = ({ value, onChange, onKeyDown, id }) => (
  <input
    id={id}
    className="selector-text"
    placeholder="Enter Template ID"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

const SelectorButton = ({ onClick }) => (
  <button className="selector-button" onClick={onClick}>
    Show Template
  </button>
);

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
      </label>
      <div className="template-selector common-width">
        <SelectorText
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          id="template-id"
        />
        <SelectorButton onClick={() => handleButtonClick(inputText)} />
      </div>
    </div>
  );
};

export default TemplateSelector;
