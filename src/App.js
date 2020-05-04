import React, { Component } from 'react';
import Validation from './Components/Validation/Validation';
import Character from './Components/Character/Character';
import './App.css';

class App extends Component {
  state = {
    textLength: 0,
    textValue: '',
  }

  textLengthHandler = (event) => {
    this.setState({
      textLength: event.target.value.length,
      textValue: event.target.value,
    })
  }

  charClickedHandler = (index) => {   
    const charList = this.state.textValue.split('');
    charList.splice(index,1);

    const updatedText = charList.join('');

    this.setState({
      textValue: updatedText
    })
  };

  render() {
    const chars = this.state.textValue.split('').filter((x,i,a) => {
      return a.indexOf(x) === i;
    }).map( (char, index) => {
      return <Character charlist={char} key={index} clicked={ () => this.charClickedHandler(index)} />
    });

    return (
      <div className="App">
        <input type="text" onChange={this.textLengthHandler} value={this.state.textValue} />
        <Validation textlength={this.state.textLength} />
        {chars}
      </div>
    );
  }
}

export default App;
