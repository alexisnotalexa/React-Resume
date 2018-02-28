import React, { Component } from "react";
import './Left.css';

class Left extends Component {
  render() {
    return(
      <div className="left-container">
        <div className="container">
          <span className="shaka" role="img" aria-label="shaka">&#x1F919;</span>
          <h1>Alexis Okamura</h1>
          <p>Full-Stack Developer based in Honolulu, HI</p>
          <div className="links">
            <a href="mailto:alexiskokamura@gmail.com"><i className="fas fa-envelope"></i></a>
            <a href="https://twitter.com/alexisnotalexa"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com/alexisko"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/alexis-ko/"><i className="fab fa-linkedin"></i></a>
            <a href="https://codepen.io/alexisko/"><i className="fab fa-codepen"></i></a>
          </div>
        </div>
        <div className="lightblue"></div>
        <div className="teal"></div>
        <div className="cadetblue"></div>
      </div>
    );
  }
}

export default Left;