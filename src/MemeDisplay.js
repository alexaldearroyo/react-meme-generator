import './MemeDisplay.css';
import React from 'react';

const MemeDisplay = ({ showImage, imageUrl, errorMessage }) => {
  return (
    <div className="meme-display">
      {showImage && (
        <img
          className="meme-image"
          src={String(imageUrl)}
          alt={`${String(imageUrl)} meme`}
        />
      )}
      {Boolean(errorMessage) && (
        <div className="error-message">{errorMessage}</div>
      )}
    </div>
  );
};

export default MemeDisplay;
