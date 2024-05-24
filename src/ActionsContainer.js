import './ActionsContainer.css';
import React, { useEffect, useState } from 'react';
import TemplateSelector from './TemplateSelector';
import TextGenerator from './TextGenerator';

const ActionsContainer = ({ setShowImage, imageUrl }) => {
  const [inputText, setInputText] = useState('doge');
  const [topText, setTopText] = useState('Hello');
  const [bottomText, setBottomText] = useState('World');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  // useEffect(() => {
  //   setShowImage('doge', 'Hello', 'World');
  // }, [setShowImage]);

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

      // Revoke the temporary URL after download to avoid memory leaks
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
        handleInputChange={handleInputChange}
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
