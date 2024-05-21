import './TemplateSelectorRow.css';
import React from 'react';

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

const TemplateSelectorRow = ({
  inputText,
  handleInputChange,
  handleButtonClick,
}) => {
  return (
    <div className="template-selector-row">
      <SelectorText value={inputText} onChange={handleInputChange} />
      <SelectorButton onClick={handleButtonClick} />
    </div>
  );
};

export default TemplateSelectorRow;
