import './TemplateSelector.css';
import React, { useState } from 'react';

const SelectorText = ({ value, onChange }) => {
  return (
    <input
      className="selector-text"
      placeholder="Search templates"
      value={value}
      onChange={onChange}
    />
  );
};

const SelectorButton = ({ onClick }) => {
  return (
    <button className="selector-button" onClick={onClick}>
      Search
    </button>
  );
};

const TemplateSelector = ({ setShowImage }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setShowImage(inputText);
  };

  return (
    <div className="template-selector">
      <SelectorText value={inputText} onChange={handleInputChange} />
      <SelectorButton onClick={handleButtonClick} />
    </div>
  );
};

export default TemplateSelector;
