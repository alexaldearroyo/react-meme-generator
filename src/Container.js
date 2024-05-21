import './Container.css';
import React from 'react';
import ActionsContainer from './ActionsContainer';
import MemeDisplay from './MemeDisplay';

const Container = ({ setShowImage, setTopText, setBottomText }) => {
  return (
    <div className="container">
      <ActionsContainer
        setShowImage={setShowImage}
        setTopText={setTopText}
        setBottomText={setBottomText}
      />
      <MemeDisplay />
    </div>
  );
};

export default Container;
