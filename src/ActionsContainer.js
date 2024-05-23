import './ActionsContainer.css';
import React, { useState } from 'react';
import TemplateSelector from './TemplateSelector';
import TextGenerator from './TextGenerator';

const ActionsContainer = ({ setShowImage }) => {
  const [inputText, setInputText] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  const handleButtonClick = () => {
    setShowImage(inputText, topText, bottomText);
  };

  return (
    <div className="actions-container">
      <TemplateSelector
        inputText={inputText}
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
      />
      <TextGenerator
        topText={topText}
        handleTopTextChange={handleTopTextChange}
        bottomText={bottomText}
        handleBottomTextChange={handleBottomTextChange}
        handleGenerateClick={handleButtonClick}
      />
    </div>
  );
};

export default ActionsContainer;
