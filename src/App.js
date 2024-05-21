import './App.css';
import React, { useEffect, useState } from 'react';
import Container from './Container';

function App() {
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => response.json())
      .then((data) => {
        const templateNames = data.map((template) => template.id);
        setTemplates(templateNames);
      })
      .catch((error) => {
        console.error('Error fetching templates:', error);
      });
  }, []);

  const handleShowImage = (templateName, topText = '_', bottomText = '_') => {
    if (templates.includes(templateName)) {
      const top = topText.trim() === '' ? '_' : encodeURIComponent(topText);
      const bottom =
        bottomText.trim() === '' ? '_' : encodeURIComponent(bottomText);
      setImageUrl(
        `https://api.memegen.link/images/${String(templateName)}/${String(top)}/${String(bottom)}.png`,
      );
      setShowImage(true);
      setErrorMessage('');
    } else {
      setShowImage(false);
      setErrorMessage('Template id not found');
    }
  };

  return (
    <div className="App">
      <div className="meme-display">
        {showImage && (
          <img className="meme-image" src={imageUrl} alt={`${imageUrl} meme`} />
        )}
        {Boolean(errorMessage) && (
          <div className="error-message">{errorMessage}</div>
        )}
      </div>
      <Container setShowImage={handleShowImage} />
    </div>
  );
}

export default App;
