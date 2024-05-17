import './TemplateSelector.css';
import React from 'react';

const SelectorText = () => {
  return <input className="selector-text" placeholder="Search templates" />;
};

const SelectorButton = () => {
  return <button className="selector-button">Search</button>;
};

const TemplateSelector = () => {
  return (
    <div className="template-selector">
      <SelectorText />
      <SelectorButton />
    </div>
  );
};

export default TemplateSelector;
