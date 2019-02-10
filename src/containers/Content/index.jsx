import React, { Component } from 'react';
import './styles.css';

class Content extends Component {
  render() {
    return (
      <div className={'content'}>
        <div className={'content--container'}>
          <div className={'box-1'} />
          <div className={'box-2'} />
        </div>
        <div className={'content--container'}>
          <div className={'box-1'} />
          <div className={'box-2'} />
        </div>
      </div>
    );
  }
}

export default Content;