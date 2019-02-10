import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Content from '../Content';
import Header from "../Header";
import Footer from "../Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
