import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }

  state = {
      persons: [
        { name: 'Max', age: 28},
        { name: 'Manu', age: 29}
      ],
      otherState: 'Azaza'
    };

  nameChangedHandler = (event) => {
    //console.log('Was clicked!');
    //DONT DO THIS WAY this.state.persons[0].name = 'Azazaelo';
    this.setState({
      persons: [
      { name: event.target.value, age: 18},
      { name: 'Manu', age: 29}
    ]})
  };

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DONT DO THIS WAY this.state.persons[0].name = 'Azazaelo';
    this.setState({
      persons: [
      { name: newName, age: 18},
      { name: 'Manu', age: 29}
    ]})
  };

  tooglePersonHandler = () => {

  };
  render(){
    return (
      <div className="App">
        <h1>Hello world</h1>
        <p>Nice to meet you!</p>
        <button 
        style={style}
        onClick={this.toglePersonHandler}>Switch Name </button>
        <div >
        <Person 
            name={this.persons[0].name} 
            age={this.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Rita')}
            changed={this.nameChangedHandler}
          />
          <Person name="Manu" age="29">My hobbies: guitar</Person>
          <Person />
        </div>
      </div>
    )
  }
}


export default App;



