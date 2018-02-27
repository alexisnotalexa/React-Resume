import React, { Component } from "react";

class Left extends Component {
  render() {
    return(
      <div>
        <h1>Alexis Okamura</h1>
        <p>Full-Stack Developer based in Honolulu, HI</p>
        <div classNamw="links">
          <a href=""><i className="fas fa-envelope"></i></a>
          <a href=""><i className="fab fa-twitter"></i></a>
          <a href=""><i className="fab fa-github"></i></a>
          <a href=""><i className="fab fa-linkedin"></i></a>
          <a href=""><i className="fab fa-codepen"></i></a>
        </div>
      </div>
    );
  }
}

export default Left;