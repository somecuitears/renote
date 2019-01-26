import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
import NoteList from './component/notelist';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header header="Notes"></Header>
        <div>  
          <NoteList></NoteList>
        </div>
      </div>
    );
  }
}

export default App;
