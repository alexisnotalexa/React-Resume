import React from 'react';
import './styles.css';

const Box = ({ background, children }) => {
  return (
    <div className={'box'} style={{ background }}>
      {children}
    </div>
  );
};

export default Box;