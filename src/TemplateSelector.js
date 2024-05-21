import './TemplateSelector.css';
import React, { useState } from 'react';
import TemplateSelectorRow from './TemplateSelectorRow';
import TextGeneratorContainer from './TextGeneratorContainer';

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
      <TemplateSelectorRow
        inputText={inputText}
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
      />
      <TextGeneratorContainer />
    </div>
  );
};

export default TemplateSelector;
