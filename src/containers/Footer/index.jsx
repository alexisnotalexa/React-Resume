import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
  render() {
    return (
      <div className={'footer'}>
        <a href="mailto:alexiskokamura@gmail.com"><i class="far fa-paper-plane"></i></a>
        <a href="https://www.linkedin.com/in/alexiskokamura/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/alexisnotalexa"><i className="fab fa-github"></i></a>
        <div className={'footer--divider'} />
        <span>&copy; Alexis Okamura 2019</span>
      </div>
    );
  }
};

export default Footer;
