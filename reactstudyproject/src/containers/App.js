import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
      persons: [
        { id:'qweq' , name: 'Max', age: 28},
        { id:'sfdsf' , name: 'Manu', age: 29}
      ],
      otherState: 'Azaza',
      showPersons: false,
      changedCounter: 0,
      authenticated: false
    };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

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

    this.setState((prevState,props) => {
      return {
        persons : persons,
        changedCounter: prevState.changedCounter + 1
      };
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

 loginHandler = () => {
   this.setState({authenticated: true})
 };

  render(){
    console.log('[App.js] render');
    console.log('started');

    let persons = null;

    if(this.state.showPersons){
      persons = (
      <div>
        {
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        }
      </div>)
    }

    return (
      <Auxiliary>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.tooglePersonHandler}
          login={this.loginHandler}
        />
        {persons}
      </Auxiliary>
    )
  }
}


export default withClass(App,classes.App);



