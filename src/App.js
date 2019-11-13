import React, { Component } from 'react';
import './App.css';
import Books from './containers/AddBookContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bookstore</h1>
          <Books></Books>
        </header>
      </div>
    );
  }
}

export default App;
