import './Container.css';
import React from 'react';
import TemplateSelector from './TemplateSelector';

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
      <TemplateSelector />
    </div>
  );
};

export default Container;
