import React, { Component } from "react";
import "./App.css";
import BooksList from "./containers/BooksListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bookstore</h1>
          <BooksList />
        </header>
      </div>
    );
  }
}

export default App;
