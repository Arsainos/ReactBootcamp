import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput'
import './App.css';

class App extends Component {
state = {
  name: 'Lola'
};

changeNameHandler = (event) => {
  this.setState({name:event.target.value})
}

  render(){
    return(
      <div>
        <UserInput change={this.changeNameHandler} name={this.state.name}></UserInput>
        <UserOutput name={this.state.name}></UserOutput>
        <UserOutput name={this.state.name}></UserOutput>
      </div>
    )
  }
}

export default App;
