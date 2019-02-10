import React, { Component } from 'react';
import './styles.css';

import Box from '../../components/Box';

class Content extends Component {
  render() {
    return (
      <div className={'content'}>
        <div className={'content--container'}>
          <Box background={'blue'}>
            <h1>Box 1</h1>
            <span>dlskfjsldkfjdlkfjsdlkfjsdlkj dfkjsdlkfjkj f;sjdf;jdsf;</span>
          </Box>
          <Box background={'pink'}>
          <h1>Box 2</h1>
          <span>dlskfjsldkfjdlkfjsdlkfjsdlkj dfkjsdlkfjkj f;sjdf;jdsf;</span>
          <h1>Box 2</h1>
          <span>dlskfjsldkfjdlkfjsdlkfjsdlkj dfkjsdlkfjkj f;sjdf;jdsf;</span>
          <h1>Box 2</h1>
          <span>dlskfjsldkfjdlkfjsdlkfjsdlkj dfkjsdlkfjkj f;sjdf;jdsf;</span>
          </Box>
        </div>
      </div>
    );
  }
}

export default Content;