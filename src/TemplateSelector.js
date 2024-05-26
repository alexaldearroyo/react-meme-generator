import './TemplateSelector.css';
import React, { useState } from 'react';

const SelectorText = ({ id, label, value, onChange, onKeyDown }) => (
  <div>
    <label htmlFor={id}>{label}</label>
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
          id="template-id"
          label="Meme template"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <SelectorButton onClick={() => handleButtonClick(inputText)} />
      </div>
    </div>
  );
};

export default TemplateSelector;
