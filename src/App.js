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

  const handleShowImage = (templateName) => {
    if (templates.includes(templateName)) {
      setImageUrl(
        `https://api.memegen.link/images/${String(templateName)}.png`,
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
      <Container
        setShowImage={handleShowImage}
        showImage={showImage}
        imageUrl={imageUrl}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default App;
