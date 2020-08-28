import React, { Component } from "react";
import { Button } from "semantic-ui-react";

const weapons = ["rock", "paper", "scissors"];
class App extends Component {
  state = {
    playerChoice: "",
    computer: "",
    results: "",
  };
  onClick(e) {
    debugger;
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
      <div id="game">
        <h1 id="title">Rock Paper Scissors</h1>

        <Button
          id="rock"
          icon="hand rock outline"
          size="massive"
          onClick={(e) => this.onClick(e)}
        >
          Rock
        </Button>
        <Button
          id="paper"
          icon="hand paper outline"
          size="massive"
          onClick={(e) => this.onClick(e)}
        >
          Paper
        </Button>

        <Button
          id="scissors"
          icon="hand scissors outline"
          size="massive"
          onClick={(e) => this.onClick(e)}
        >
          Scissors
        </Button>

        <div id="result">
          <h3>
            Player choose {this.state.playerChoice} and computer choose{" "}
            {this.state.computer}
          </h3>
          <h1>{this.state.results}</h1>
        </div>
      </div>
    );
  }
}

export default App;
