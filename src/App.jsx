import React, { Component } from "react";

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
        <div>
          <h1 id="title">Rock Paper Scissors</h1>
          <button id="rock" onClick={(e) => this.onClick(e)}>
            Rock
          </button>
          <button id="paper" onClick={(e) => this.onClick(e)}>
            Paper
          </button>
          <button id="scissors" onClick={(e) => this.onClick(e)}>
            Scissors
          </button>
        </div>
        <div>
          <h1 id="result">{this.state.results}</h1>
        </div>
      </>
    );
  }
}

export default App;
