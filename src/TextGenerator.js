import './TextGenerator.css';
import React from 'react';

const TextRow = ({ label, id, value, handleChange }) => (
  <div className={`${id}-container`}>
    <label htmlFor={id} className={`${id}-label`}>
      {label}
    </label>
    <input
      id={id}
      placeholder={`Enter ${label.toLowerCase()}`}
      value={value}
      onChange={handleChange}
    />
  </div>
);

const TextGenerator = ({
  topText,
  handleTopTextChange,
  bottomText,
  handleBottomTextChange,
  handleGenerateClick,
  handleDownloadClick,
}) => (
  <div className="text-generator-container common-width">
    <TextRow
      label="Top text"
      id="top-text"
      value={topText}
      handleChange={handleTopTextChange}
    />
    <TextRow
      label="Bottom text"
      id="bottom-text"
      value={bottomText}
      handleChange={handleBottomTextChange}
    />
    <div className="button-container">
      <button className="text-button" onClick={handleGenerateClick}>
        Generate
      </button>
      <button className="text-button" onClick={handleDownloadClick}>
        Download
      </button>
    </div>
  </div>
);

export default TextGenerator;
