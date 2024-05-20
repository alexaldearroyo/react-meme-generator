import './App.css';
import React, { useState } from 'react';
import Container from './Container';

function App() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="App">
      {showImage && (
        <div className="image-container">
          <img
            className="meme-image"
            src="https://api.memegen.link/images/aag.png"
            alt="aag meme"
          />
        </div>
      )}
      <Container setShowImage={setShowImage} />
    </div>
  );
}

export default App;
