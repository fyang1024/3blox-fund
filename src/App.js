import React, { Component } from 'react';
import logo from './3blox-logo.svg';
import logoTxt from './3blox-txt.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <span className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoTxt} className="App-logo-txt" alt="3blox" />
      </span>
    );
  }
}

export default App;
