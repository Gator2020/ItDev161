import logo from './logo.svg';
import './App.css';
import React  from 'react';
import axios from 'axios';
import {BrowserRoutere as Router, Switch, Rpute, Link} from 'react-router-dom'
;
import './App.css';
import Register from './Components/Register/register';
import Login from './Components/Login/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
