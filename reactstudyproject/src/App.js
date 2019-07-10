import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
      persons: [
        { name: 'Max', age: 28},
        { name: 'Manu', age: 29}
      ],
      otherState: 'Azaza'
    }
  );

  const switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DONT DO THIS WAY this.state.persons[0].name = 'Azazaelo';
    setPersonsState({
      persons: [
      { name: newName, age: 18},
      { name: 'Manu', age: 29}
    ]})
  };
  
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>Nice to meet you!</p>
      <button onClick={switchNameHandler}>Switch Name </button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        click={switchNameHandler}
      />
      <Person name="Manu" age="29">My hobbies: guitar</Person>
      <Person />
    </div>
  );
}


export default App;



