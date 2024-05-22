import './ActionsContainer.css';
import React, { useState } from 'react';
import TemplateSelector from './TemplateSelector';
import TextGenerator from './TextGenerator';

const ActionsContainer = ({ setShowImage }) => {
  const [inputText, setInputText] = useState('');
  const [topText, setTopTextState] = useState('');
  const [bottomText, setBottomTextState] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTopTextChange = (e) => {
    setTopTextState(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomTextState(e.target.value);
  };

  const handleButtonClick = () => {
    setShowImage(inputText, topText, bottomText);
  };

  const handleApplyTopText = () => {
    setShowImage(inputText, topText, bottomText);
  };

  const handleApplyBottomText = () => {
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
        handleApplyTopText={handleApplyTopText}
        bottomText={bottomText}
        handleBottomTextChange={handleBottomTextChange}
        handleApplyBottomText={handleApplyBottomText}
      />
    </div>
  );
};

export default ActionsContainer;
