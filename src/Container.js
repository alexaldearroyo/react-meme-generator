import './Container.css';
import React from 'react';
import MemeDisplay from './MemeDisplay';
import TemplateSelector from './TemplateSelector';

const Container = ({ setShowImage, showImage, imageUrl, errorMessage }) => {
  return (
    <div className="container">
      <TemplateSelector setShowImage={setShowImage} />
      <MemeDisplay
        showImage={showImage}
        imageUrl={imageUrl}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Container;
