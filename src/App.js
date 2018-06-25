// React
import React, { Component } from 'react';
import './App.css';
// Components
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";


// Randomizing character array
function randomizeChars(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};


class App extends Component {

  state = {
    characters: characters,
    score: 0,
    topscore: 0
  };

  // Invoking randomization of characters
  randomizeDisplay = id => {
    let reorderedChars = randomizeChars(characters);
    this.setState({ characters: reorderedChars });

  };

  restartGame = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score })
      console.log("Topscore: " + this.state.topscore);
    }
    this.state.characters.forEach(character => character.count = 0);
    this.setState({ score: 0 })
    console.log("Restarting game.")
    // this.randomizeDisplay();
  }

  clickCount = id => {
    this.state.characters.find((guess, i) => {
      if (guess.id === id) {
        console.log("Guess: " + guess.id)
        if(characters[i].count === 0){
          characters[i].count = characters[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log("Current score: " + this.state.score);
          });
          this.randomizeDisplay()
          return true; 
        } 
        else {
          this.restartGame();
        }
      }
    });
  }


  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <div className="container">
          {this.state.characters.map(character => (
            <Card
              id={character.id}
              key={character.id}
              image={character.image}
              clickCount={this.clickCount}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
