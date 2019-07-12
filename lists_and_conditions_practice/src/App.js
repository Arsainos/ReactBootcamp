import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text:{
      length:0,
      charArray:[]
    }
  }
  
  inputTextChangedHandler = (event) => {
    const textLength = event.target.value.length;

    const characterArray = event.target.value.split('');

    this.setState({text:{length:textLength,charArray:characterArray}});
  };

  render(){
    const characters = this.state.text.charArray.map((character,index) =>{
      return <CharComponent charValue={character}></CharComponent>
    });


    return(
      <div className="App">
        <input type="text" onChange={(event) => this.inputTextChangedHandler(event)}></input>
        <p>Text length: {this.state.text.length}</p>
        <ValidationComponent 
          textLength={this.state.text.length} />
        {characters}
      </div>
    )
  }
}

export default App;
