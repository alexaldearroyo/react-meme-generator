import './TemplateSelector.css';
import React, { useState } from 'react';

const TemplateSelector = ({ handleButtonClick }) => {
  const [templateId, setTemplateId] = useState('doge');

  const handleInputChange = (e) => {
    setTemplateId(e.target.value);
  };

  const handleButtonClickInternal = () => {
    handleButtonClick(templateId);
  };

  return (
    <div className="template-selector common-width">
      <label htmlFor="template-id" className="template-label">
        Meme template
      </label>
      <input
        id="template-id"
        className="selector-text"
        placeholder="Enter Template ID"
        value={templateId}
        onChange={handleInputChange}
      />
      <button className="selector-button" onClick={handleButtonClickInternal}>
        Show Template
      </button>
    </div>
  );
};

export default TemplateSelector;
