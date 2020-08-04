import React, {Component} from 'react';

const weapons = ["rock", "paper", "scissors"]
class App extends Component {
  state = {
    playerChoice: "",
    computer: "",
  }
  onClick(e) {
   
    const playerChoice = e.target.id 
    const computer = weapons[Math.floor(Math.random() * weapons.length)] 
  }
  render () {
  return (
    <div>
      <h1 id="title">Rock Paper Scissors</h1>
      <button id="rock" onClick={e => this.onClick(e)} >Rock</button>
      <button id="paper" onClick={e => this.onClick(e)} >Paper</button>
      <button id="scissors" onClick={e => this.onClick(e)} >Scissors</button>
    </div>
  )}
}

export default App;