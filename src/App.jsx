import React, {Component} from 'react';


class App extends Component {
  state = {
    playerChoice: "",
  }
  onClick(e) {
   
    const playerChoice = e.target.id 
  }
  render (){
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