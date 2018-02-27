import React, { Component } from "react";
import './Right.css';

class Right extends Component {
  render() {
    return(
      <div className="right-container">
        <div className="section">
          <h3>EXPERIENCE</h3>
          <div className="content">
            <div className="container">
              <div className="job">
                <h4>Java Web Developer</h4>
                <span className="date">October 2017 - February 2018</span>
              </div>
              <span className="company">ALTRES</span>
              <ul className="description">
                <li>Tested and developed ALTRES’ HR Symphony software</li>
                <li>Worked with a small team that follows agile software development methodologies and scrum</li>
                <li>Utilized Java, JSTL, Java Servlets, PowerMock, MySQL, MVC</li>
              </ul>
            </div>
            <div className="container">
              <div className="job">
                <h4>Assistant Web Developer</h4>
                <span className="date">SEPTEMBER 2016 - MAY 2017</span>
              </div>
              <span className="company">CTAHR Nutrition Education for Wellness Program</span>
              <ul className="description">
                <li>Contributed to website maintenance, testing, and development</li>
                <li>Converted the CTAHR website to be ADA compliant </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="section">
          <h3>PROJECTS</h3>
          <div className="content">
            <div className="container">
              <div className="job">
                <h4>Java Web Developer</h4>
                <span className="date">October 2017 - February 2018</span>
              </div>
              <span className="company">ALTRES</span>
              <ul className="description">
                <li>Tested and developed ALTRES’ HR Symphony software</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="section">
          <h3>EDUCATION</h3>
          <div className="content">
            <div className="container">
              <div className="job">
                <h4>FreeCodeCamp</h4>
                <span className="date">JULY 2017 - PRESENT</span>
              </div>
              <span className="company">Front-End Development Certificaiton</span>
              <ul className="description">
                <li>Currently completing over 400 hours of programming.</li>
              </ul>
            </div>
            <div className="container">
              <div className="job">
                <h4>Devleague</h4>
                <span className="date">MAY 2017 - NOVEMBER 2017</span>
              </div>
              <span className="company">Javascript Web Engineer Track - Certificate of Completetion</span>
              <ul className="description">
                <li>Completed over 800 hours hours of intensive web development programming over a six-month period</li>
                <li>Participated in AngelHack Global Hackathon with a team and created several Alexa skills for pet owners, July 2017</li>
              </ul>
            </div>
            <div className="container">
              <div className="job">
                <h4>University of Hawaii at Manoa</h4>
                <span className="date">FALL 2011 - SPRING 2017</span>
              </div>
              <span className="company">BA in Computer Science + Certificate in Japanese Language</span>
              <ul className="description">
                <li>Dean’s Honor List, Fall 2012</li>
                <li>Japanese Literature Poetry Contest Winner, Spring 2012</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;