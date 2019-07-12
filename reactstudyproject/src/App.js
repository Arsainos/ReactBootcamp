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
        { id:'qweq' , name: 'Max', age: 28},
        { id:'sfdsf' , name: 'Manu', age: 29}
      ],
      otherState: 'Azaza',
      showPersons: false
    };

  nameChangedHandler = (event , id) => {
    //console.log('Was clicked!');
    //DONT DO THIS WAY this.state.persons[0].name = 'Azazaelo';
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  };

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  render(){
    let persons = null;

    if(this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        })}
      </div>)
    }

    return (
      <div className="App">
        <h1>Hello world</h1>
        <p>Nice to meet you!</p>
        <button 
        style={this.style}
        onClick={this.tooglePersonHandler}>Switch Name </button>
        {persons}
      </div>
    )
  }
}


export default App;



