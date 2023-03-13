import React, { FC } from 'react';
import './loading.css';

interface BlurMessageProps {
  message: string;
}

const BlurMessage: FC<BlurMessageProps> = ({ message }) => {
  return (
    <div className="blur-message-container">
      <div className="blur-message-overlay"></div>
      <div className="blur-message">{message}</div>
    </div>
  );
};

export default BlurMessage;