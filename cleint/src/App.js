import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import { response } from 'express';
import { render } from 'express/lib/response';
import {check, validationResult } from 'express-validator';
import cors from 'cors';
class App extends React.Component
{
  state = {
    data: null
  }
  componentDidMount()
  {
    axios.get('http://localhost:5000')
    .then((response) => {
      this.setState({
        data: response.data})
    })
  
  .catch((error) => 
    {
      console.error('Error fetching data: ${error}');
    })
  

  

  }


render() {

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
        GoodThings
        </a>
      </header>
      {this.state.data}
    </div>
  );
  }
}
  
export default App;
