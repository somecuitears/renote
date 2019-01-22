import React, { Component } from 'react';
import './App.css';
import Header from './component/header';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header header="Notes"></Header>
      </div>
    );
  }
}

export default App;
