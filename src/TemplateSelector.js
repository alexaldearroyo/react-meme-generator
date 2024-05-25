import './TemplateSelector.css';
import React, { useState } from 'react';

const SelectorText = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      className="selector-text"
      placeholder="Enter Template ID"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

const SelectorButton = ({ onClick }) => {
  return (
    <button className="selector-button" onClick={onClick}>
      Show Template
    </button>
  );
};

const TemplateSelector = ({ handleButtonClick }) => {
  const [inputText, setInputText] = useState(''); // Estado para almacenar el texto ingresado

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick(inputText); // Llama a handleButtonClick con el texto ingresado si la tecla presionada es Enter
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value); // Actualiza el estado con el texto ingresado
  };

  return (
    <div className="template-selector-container">
      <label htmlFor="template-id" className="template-label">
        Meme template
      </label>
      <div className="template-selector common-width">
        <SelectorText
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Cambiamos el evento a onKeyDown
        />
        <SelectorButton onClick={() => handleButtonClick(inputText)} />{' '}
        {/* Llama a handleButtonClick con el texto ingresado al hacer clic en el botón */}
      </div>
    </div>
  );
};

export default TemplateSelector;
