import './App.css';
import React, { useEffect, useState } from 'react';
import ActionsContainer from './ActionsContainer';
import MemeDisplay from './MemeDisplay';

function App() {
  const [showImage, setShowImage] = useState(true);
  const [imageUrl, setImageUrl] = useState(
    'https://api.memegen.link/images/doge/Hello/World.png',
  );
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

  const handleShowImage = (templateName, topText, bottomText) => {
    if (templates.includes(templateName)) {
      const newImageUrl = `https://api.memegen.link/images/${templateName}/${topText}/${bottomText}.png`;
      setImageUrl(newImageUrl);
      setShowImage(true);
      setErrorMessage('');
    } else {
      setShowImage(false);
      setErrorMessage('Template id not found');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <MemeDisplay
          showImage={showImage}
          imageUrl={imageUrl}
          errorMessage={errorMessage}
        />
        <ActionsContainer setShowImage={handleShowImage} imageUrl={imageUrl} />
      </div>
    </div>
  );
}

export default App;
