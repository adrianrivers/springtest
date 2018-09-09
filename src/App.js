import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-content">
          <h3>Spring Coding Challenge</h3>
        </div>
      </div>
    );
  }
}

export default App;
