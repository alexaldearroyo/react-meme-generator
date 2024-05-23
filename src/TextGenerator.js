import './TextGenerator.css';
import React from 'react';

const TopTextRow = ({ topText, handleTopTextChange }) => {
  return (
    <div className="top-text-container">
      <label htmlFor="top-text" className="top-text-label">
        Top text
      </label>
      <input
        placeholder="Enter top text"
        value={topText}
        onChange={handleTopTextChange}
      />
    </div>
  );
};

const BottomTextRow = ({ bottomText, handleBottomTextChange }) => {
  return (
    <div className="bottom-text-container">
      <label htmlFor="bottom-text" className="bottom-text-label">
        Bottom text
      </label>
      <input
        placeholder="Enter bottom text"
        value={bottomText}
        onChange={handleBottomTextChange}
      />
    </div>
  );
};

const TextGenerator = ({
  topText,
  handleTopTextChange,
  bottomText,
  handleBottomTextChange,
  handleGenerateClick,
}) => {
  return (
    <div className="text-generator-container common-width">
      <TopTextRow topText={topText} handleTopTextChange={handleTopTextChange} />
      <BottomTextRow
        bottomText={bottomText}
        handleBottomTextChange={handleBottomTextChange}
      />
      <button className="text-button" onClick={handleGenerateClick}>
        Generate
      </button>
    </div>
  );
};

export default TextGenerator;
