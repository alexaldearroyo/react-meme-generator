import './ActionsContainer.css';
import React, { useEffect, useState } from 'react';
import TemplateSelector from './TemplateSelector';
import TextGenerator from './TextGenerator';

const ActionsContainer = ({ setShowImage, imageUrl }) => {
  const [inputText, setInputText] = useState('doge');
  const [topText, setTopText] = useState('Hello');
  const [bottomText, setBottomText] = useState('World');

  useEffect(() => {
    setShowImage(inputText, topText, bottomText);
  }, [inputText, topText, bottomText, setShowImage]);

  const handleDownloadClick = async () => {
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'meme.png';
      link.style.display = 'none';

      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const handleButtonClick = () => {
    const encodedTopText = encodeURIComponent(topText);
    const encodedBottomText = encodeURIComponent(bottomText);
    setShowImage(inputText, encodedTopText, encodedBottomText);
  };

  return (
    <div className="actions-container">
      <TemplateSelector
        inputText={inputText}
        handleInputChange={(e) => setInputText(e.target.value)}
        handleButtonClick={handleButtonClick}
      />
      <TextGenerator
        topText={topText}
        handleTopTextChange={(e) => setTopText(e.target.value)}
        bottomText={bottomText}
        handleBottomTextChange={(e) => setBottomText(e.target.value)}
        handleGenerateClick={handleButtonClick}
        handleDownloadClick={handleDownloadClick}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default ActionsContainer;
