import React, { useState } from 'react';

const SelectorText = ({ value, onChange, onKeyDown, id, label }) => (
  <div className="selector-text-container">
    <label htmlFor={id} className="template-label">
      {label}
    </label>
    <input
      id={id}
      className="selector-text"
      placeholder="Enter Template ID"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  </div>
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
      <div className="template-selector common-width">
        <SelectorText
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          id="template-id"
          label="Meme template"
        />
        <SelectorButton onClick={() => handleButtonClick(inputText)} />
      </div>
    </div>
  );
};

export default TemplateSelector;
