import './TemplateSelector.css';
import React from 'react';

const SelectorText = ({ value, onChange }) => {
  return (
    <input
      className="selector-text"
      placeholder="Enter Template ID"
      value={value}
      onChange={onChange}
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
  return (
    <div className="template-selector-container">
      <label htmlFor="template-id" className="template-label">
        Meme template
      </label>
      <div className="template-selector common-width">
        <SelectorText value={inputText} onChange={handleInputChange} />
        <SelectorButton onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default TemplateSelector;
