import './Container.css';
import React from 'react';
import TemplateSelector from './TemplateSelector';

const Container = ({ setShowImage }) => {
  return (
    <div className="container">
      <TemplateSelector setShowImage={setShowImage} />
    </div>
  );
};

export default Container;
