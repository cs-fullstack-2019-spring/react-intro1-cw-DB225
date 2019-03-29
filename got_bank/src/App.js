import React, { Component } from 'react';
import './App.css';
import BankAccount from './BankAccount';
import NetFlix from './NetFlix';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BankAccount customerName="Didier" balance="1000"/>
          <NetFlix />
        </header>
      </div>
    );
  }
}

export default App;

//Exercise2