import './TemplateSelector.css';
import React from 'react';

const SelectorText = ({ value, onChange, onKeyPress }) => {
  return (
    <input
      className="selector-text"
      placeholder="Enter Template ID"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

const SelectorButton = ({ onClick }) => {
  return (
    <button className="selector-button" onClick={onClick}>
      Show Template
    </button>
  );
};

const TemplateSelector = ({
  inputText,
  handleInputChange,
  handleButtonClick,
}) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
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
          onKeyPress={handleKeyPress}
        />
        <SelectorButton onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default TemplateSelector;
