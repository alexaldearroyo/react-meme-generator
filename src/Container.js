import './Container.css';
import React from 'react';
import MemeDisplay from './MemeDisplay';
import TemplateSelector from './TemplateSelector';

const Container = ({ setShowImage, setTopText, setBottomText }) => {
  return (
    <div className="container">
      <TemplateSelector
        setShowImage={setShowImage}
        setTopText={setTopText}
        setBottomText={setBottomText}
      />
      <MemeDisplay />
    </div>
  );
};

export default Container;
