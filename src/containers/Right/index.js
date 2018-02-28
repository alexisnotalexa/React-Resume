import React, { Component } from "react";
import './Right.css';

class Right extends Component {
  render() {
    return(
      <div className="right-container">
        <section>
          <h3>SKILLS</h3>
          <div className="content">
            <p><strong>LANGUAGES:</strong> Javascript, HTML5, CSS3, Java, SQL</p>
            <p><strong>LIBRARIES &amp; FRAMEWORKS:</strong> Node, Express, React, Redux, Handlebars, Bootstrap, AngularJS, jQuery, JSTL, PowerMock</p>
            <p><strong>TOOLS:</strong> Git, Github, Sublime Text, Postman, Gulp, Eclipse, Adobe Photoshop &amp; Lightroom</p>
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
                <li>Tested and developed ALTRES’ HR Symphony software</li>
                <li>Worked with a small team that follows agile software development methodologies</li>
                <li>Utilized Java, JSTL, Java Servlets, PowerMock, MySQL, MVC</li>
              </ul>
            </div>
            <div className="content-container">
              <div className="job">
                <span className="title">Assistant Web Developer</span>
                <span className="date">September 2016 - May 2017</span>
              </div>
              <span>CTAHR NEW Program - Honolulu, HI</span>
              <ul className="description">
                <li>Contributed to website maintenance, testing, and development</li>
                <li>Converted the CTAHR website to be ADA compliant</li>
                <li>Assisted in troubleshooting hardware and software issues</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3>PROJECTS</h3>
          <div className="content">
            <div className="content-container">
              <div className="project">
                <span className="title">Free Code Camp Projects</span>
                <a href="https://codepen.io/alexisko/"><i className="fas fa-asterisk"></i></a>
              </div>
              <p>Currently completing various different front-end programming projects</p>
              <p><strong>Technologies:</strong> HTML5/CSS3, jQuery, Javascript, Bootstrap</p>
            </div>
            <div className="content-container">
              <div className="project">
                <span className="title">Express Gallery</span>
                <a href="https://github.com/alexisko/Express-Gallery"><i className="fas fa-asterisk"></i></a>
              </div>
              <p>A full-stack CRUD(Create/Read/Update/Delete) gallery web application</p>
              <p><strong>Technologies:</strong> Node, Express, PostgreSQL, Sequelize, Handlebars, Redis, Gulp, SCSS, HTML5/CSS3</p>
            </div>
            <div className="content-container">
              <div className="project">
                <span className="title">Help Your City</span>
                <a href="https://helpyour.city/"><i className="fas fa-asterisk"></i></a>
              </div>
              <p>Developed and designed a web application in a five-week timespan with a four person team to help people connect to each other during natural disasters</p>
              <p><strong>Technologies:</strong> Node, Express, PostgreSQL, Sequelize, React, Redux, HTML5/CSS3, JWT, Twilio</p>
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
                <li>Completed over 800 hours of intensive web development programming over a six-month period</li>
                <li>Devleague's curriculum is focused on teaching popular coding languages and technologies such as Node, AngularJS, React, Redux, SASS, Gulp, PostgreSQL, and MongoDB to name a few</li>
                <li>Participated in AngelHack Global Hackathon with a team and created several Alexa skills for pet owners, July 2017</li>
              </ul>
            </div>
            <div className="content-container">
              <div className="job">
                <span className="title">University of Hawaii at Manoa</span>
                <span className="date">Fall 2011 - Spring 2017</span>
              </div>
              <span>BA in Computer Science + Certificate in Japanese Language</span>
              <ul className="description">
                <li>Dean’s Honor List, Fall 2012</li>
                <li>Japanese Literature Poetry Contest Winner, Spring 2012</li>
              </ul>
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