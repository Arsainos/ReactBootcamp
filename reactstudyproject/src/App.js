import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <p>Nice to meet you!</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My hobbies: guitar</Person>
        <Person />
      </div>
    );
  }
}

export default App;
