import './TextGenerator.css';
import React from 'react';

const TopTextRow = ({ topText, handleTopTextChange, onApplyTopText }) => {
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

const BottomTextRow = ({
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

const TextGenerator = ({
  topText,
  handleTopTextChange,
  handleApplyTopText,
  bottomText,
  handleBottomTextChange,
  handleApplyBottomText,
}) => {
  return (
    <div className="text-generator-container common-width">
      <TopTextRow
        topText={topText}
        handleTopTextChange={handleTopTextChange}
        onApplyTopText={handleApplyTopText}
      />
      <BottomTextRow
        bottomText={bottomText}
        handleBottomTextChange={handleBottomTextChange}
        onApplyBottomText={handleApplyBottomText}
      />
    </div>
  );
};

export default TextGenerator;
