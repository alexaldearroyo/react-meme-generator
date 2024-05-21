import './TextGeneratorContainer.css';
import React from 'react';

const TopTextContainer = () => {
  return (
    <div className="top-text-container">
      <input placeholder="Enter top text" />
    </div>
  );
};

const BottomTextContainer = () => {
  return (
    <div className="bottom-text-container">
      <input placeholder="Enter bottom text" />
    </div>
  );
};

const TextGeneratorContainer = () => {
  return (
    <div className="text-generator-container">
      <TopTextContainer />
      <BottomTextContainer />
    </div>
  );
};

export default TextGeneratorContainer;
