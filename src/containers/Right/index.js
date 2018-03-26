import React, { Component } from "react";
import './Right.css';

class Right extends Component {
  render() {
    return(
      <div className="right-container">
        <section>
          <h3>SKILLS</h3>
          <div className="content">
            <p><strong>LANGUAGES:</strong> Javascript (ES5&amp;ES6), HTML5, CSS3/SCSS, Java, SQL/NoSQL (MySQL, PostgreSQL, MongoDB, Redis)</p>
            <p><strong>LIBRARIES &amp; FRAMEWORKS:</strong> React, Redux, Angular, Node, Express, Handlebars, Bootstrap, jQuery, JSTL, PowerMock/EasyMock</p>
            <p><strong>TOOLS:</strong> Git &amp; Github, Node/NPM, Sublime Text, Postman, Gulp, Eclipse, Adobe Photoshop, Dreamweaver, Lightroom</p>
          </div>
        </section>
        <section>
          <h3>EXPERIENCE</h3>
          <div className="content">
            <div className="content-container">
              <div className="job">
                <span className="title">Java Web Developer</span>
                <span className="date">October 2017 - February 2018</span>
              </div>
              <span>Altres - Honolulu, HI</span>
              <ul className="description">
                <li>Developed a feature using Java, JSTL, and Java Servlets that allows users to import/export Excel documents to track employee costing rates and update any changes in the database</li>
                <li>Created and updated front end features utilizing JSTL, jQuery, and Javascript</li>
                <li>Tested existing software features and functions using PowerMock/EasyMock</li>
                <li>Worked on a team that follows agile software development methodologies</li>
              </ul>
            </div>
            <div className="content-container">
              <div className="job">
                <span className="title">Assistant Web Developer</span>
                <span className="date">September 2016 - May 2017</span>
              </div>
              <span>CTAHR NEW Program - Honolulu, HI</span>
              <ul className="description">
                <li>Responsible for website maintenance by testing existing features and updating information throughout the website along with troubleshooting any software issues</li>
                <li>Assisted in converting the CTAHR website to be ADA compliant</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3>PROJECTS</h3>
          <div className="content">
            <div className="content-container">
              <div className="project">
                <span className="title">Table for Two - AT&amp;T Hackathon 2018</span>
                <a href="https://github.com/alexisnotalexa/ATTHackathon2018"><i className="fas fa-asterisk"></i></a>
              </div>
              <p>Designed a React Native application for the 2018 AT&T Hackathon that connects two users based on restaurant interests and current location</p>
              <p>Created a simple and efficient user experience by planning out the application flow through wireframes and focusing on a minimalistic design</p>
              <p><strong>Technologies:</strong> React Native, Express, Node, MongoDB</p>
            </div>
            <div className="content-container">
              <div className="project">
                <span className="title">Free Code Camp Projects</span>
                <a href="https://codepen.io/alexisnotalexa/"><i className="fas fa-asterisk"></i></a>
              </div>
              <p>Developed several front-end projects utilizing HTML5/CSS3, Javascript, jQuery, Bootstrap, CSS animations, and various APIs</p>
              <p><strong>Technologies:</strong> HTML5/CSS3, jQuery, Javascript, Bootstrap</p>
            </div>
            <div className="content-container">
              <div className="project">
                <span className="title">Help Your City</span>
                <a href="https://helpyour.city/"><i className="fas fa-asterisk"></i></a>
              </div>
              <p>Developed a full-stack web application in a team to connect people quickly during natural disasters without the user needing to communicate to emergency services</p>
              <p>Responsible for the design of the application while managing and delegating tasks to the team</p>
              <p><strong>Technologies:</strong> React, Redux, PostgreSQL, Express, JWT, Twilio, Sequelize</p>
            </div>
          </div>
        </section>
        <section>
          <h3>EDUCATION</h3>
          <div className="content">
            <div className="content-container">
              <div className="job">
                <span className="title">FreeCodeCamp</span>
                <span className="date">July 2017 - Present</span>
              </div>
              <span>Front-End Development Certification</span>
              <ul className="description">
                <li>Currently completing over 400 hours of front-end focused web development programming</li>
                <li>Curriculum includes learning basic HTML5/CSS3, Javascript, jQuery, Bootstrap, and Algorithm scripting</li>
              </ul>
            </div>
            <div className="content-container">
              <div className="job">
                <span className="title">Devleague</span>
                <span className="date">May 2017 - November 2017</span>
              </div>
              <span>Javascript Web Engineer Track</span>
              <ul className="description">
                <li>Completed over 800 hours in an intensive coding boot camp focused on learning and utilizing modern web development languages and best practices for developing applications built for both mobile and web platforms</li>
                <li>Participated in team for the 2017 AngelHack Global Hackathon to create Alexa skills for pet owners and designed a landing page for the product</li>
              </ul>
            </div>
            <div className="content-container">
              <div className="job">
                <span className="title">University of Hawaii at Manoa</span>
                <span className="date">Fall 2011 - Spring 2017</span>
              </div>
              <span>BA in Computer Science + Certificate in Japanese Language</span>
            </div>
          </div>
        </section>
        <section className="bottom">
          <button><a className="button" href="http://www.alexisokamura.com/assets/Alexis-Okamura-Resume.pdf">PDF VERSION</a></button>
        </section>
      </div>
    );
  }
}

export default Right;