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

const TemplateSelector = ({ inputText, handleInputChange }) => {
  return (
    <div className="template-selector-container">
      <label htmlFor="template-id" className="template-label">
        Meme template
      </label>
      <div className="template-selector common-width">
        <SelectorText value={inputText} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default TemplateSelector;
