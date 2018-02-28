import React, { Component } from "react";
import './Left.css';

class Left extends Component {
  render() {
    return(
      <div className="left-container">
        <span className="shaka" role="img" aria-label="shaka">&#x1F919;</span>
        <h1>Alexis Okamura</h1>
        <p>Full-Stack Developer based in Honolulu, HI</p>
        <div className="links">
          <a href="https://github.com/alexisko"><i className="fa fa-envelope"></i></a>
          <a href="https://github.com/alexisko"><i className="fa fa-twitter"></i></a>
          <a href="https://github.com/alexisko"><i className="fa fa-github"></i></a>
          <a href="https://github.com/alexisko"><i className="fa fa-linkedin"></i></a>
          <a href="https://github.com/alexisko"><i className="fa fa-codepen"></i></a>
        </div>
      </div>
    );
  }
}

export default Left;