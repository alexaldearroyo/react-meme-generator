import './ActionsContainer.css';
import React, { useEffect, useState } from 'react';
import TemplateSelector from './TemplateSelector';
import TextGenerator from './TextGenerator';

const ActionsContainer = ({ setShowImage, imageUrl }) => {
  const [inputText, setInputText] = useState('doge');
  const [topText, setTopText] = useState('Hello');
  const [bottomText, setBottomText] = useState('World');

  const handleTopTextChange = (e) => {
    const newText = e.target.value;
    const encodedText = encodeURIComponent(newText);
    setTopText(encodedText);
  };
  const handleBottomTextChange = (e) => {
    const newText = e.target.value;
    const encodedText = encodeURIComponent(newText);
    setBottomText(encodedText);
  };

  useEffect(() => {
    const encodedTopText = encodeURIComponent(topText);
    const encodedBottomText = encodeURIComponent(bottomText);
    setShowImage(inputText, encodedTopText, encodedBottomText);
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

  return (
    <div className="actions-container">
      <TemplateSelector
        inputText={inputText}
        handleInputChange={(e) => setInputText(e.target.value)}
      />
      <TextGenerator
        topText={topText}
        handleTopTextChange={handleTopTextChange}
        bottomText={bottomText}
        handleBottomTextChange={handleBottomTextChange}
        handleGenerateClick={() => setShowImage(inputText, topText, bottomText)}
        handleDownloadClick={handleDownloadClick}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default ActionsContainer;
