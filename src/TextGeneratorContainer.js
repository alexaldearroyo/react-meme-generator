import './TextGeneratorContainer.css';
import React from 'react';

const TopTextContainer = ({ topText, handleTopTextChange, onApplyTopText }) => {
  return (
    <div className="top-text-container">
      <input
        placeholder="Enter top text"
        value={topText}
        onChange={handleTopTextChange}
      />
      <button className="text-button" onClick={onApplyTopText}>
        Add
      </button>
    </div>
  );
};

const BottomTextContainer = ({
  bottomText,
  handleBottomTextChange,
  onApplyBottomText,
}) => {
  return (
    <div className="bottom-text-container">
      <input
        placeholder="Enter bottom text"
        value={bottomText}
        onChange={handleBottomTextChange}
      />
      <button className="text-button" onClick={onApplyBottomText}>
        Add
      </button>
    </div>
  );
};

const TextGeneratorContainer = ({
  topText,
  handleTopTextChange,
  handleApplyTopText,
  bottomText,
  handleBottomTextChange,
  handleApplyBottomText,
}) => {
  return (
    <div className="text-generator-container common-width">
      <TopTextContainer
        topText={topText}
        handleTopTextChange={handleTopTextChange}
        onApplyTopText={handleApplyTopText}
      />
      <BottomTextContainer
        bottomText={bottomText}
        handleBottomTextChange={handleBottomTextChange}
        onApplyBottomText={handleApplyBottomText}
      />
    </div>
  );
};

export default TextGeneratorContainer;
