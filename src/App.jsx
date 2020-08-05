import React, { Component } from "react";
import { Button, } from "semantic-ui-react";

const weapons = ["rock", "paper", "scissors"];
class App extends Component {
  state = {
    playerChoice: "",
    computer: "",
    results: "",
  };
  onClick(e) {
    const playerChoice = e.target.id;
    const computer = weapons[Math.floor(Math.random() * weapons.length)];
    const results = this.getResults(playerChoice, computer);
    this.setState({
      playerChoice: playerChoice,
      computer: computer,
      results: results,
    });
  }
  getResults(playerChoice, computer) {
    if (playerChoice === computer) {
      return "Tie";
    }

    if (
      (playerChoice === "rock" && computer === "scissors") ||
      (playerChoice === "paper" && computer === "rock") ||
      (playerChoice === "scissors" && computer === "paper")
    ) {
      return "You Win";
    } else {
      return "You Lose";
    }
  }
  render() {
    return (
      <>
        <div id="game">
          <h1 id="title">Rock Paper Scissors</h1>
          <Button circular icon="hand rock outline" size="massive" id="rock" onClick={(e) => this.onClick(e)} />

          <Button circular icon="hand paper outline" size="massive" id="paper" onClick={(e) => this.onClick(e)} />

          <Button circular icon="hand scissors outline" size="massive" id="scissors" onClick={(e) => this.onClick(e)} />
        </div>
        <div id="result">
          <h1>{this.state.results}</h1>
        </div>
      </>
    );
  }
}

export default App;
