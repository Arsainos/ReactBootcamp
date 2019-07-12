import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text:{
      length:0
    }
  }
  
  inputTextChangedHandler = (event) => {
    const textLength = event.target.value.length;

    this.setState({text:{length:textLength}});
  };

  render(){
    return(
      <div>
        <input type="text" onChange={(event) => this.inputTextChangedHandler(event)}></input>
        <p>Text length: {this.state.text.length}</p>
      </div>
    )
  }
}

export default App;
