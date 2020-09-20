import React, { Component } from "react";
import Images from "./components/Images";
/* import Score from "./components/Score"; */
import {Grid} from 'semantic-ui-react';

const plays = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    user: plays[0],
    computer: plays[0],
    winner: "",
    userScore: 0,
    computerScore: 0,
    ishidden: true,
  };

  playGame = () => {
    this.setState({
      computer: plays[Math.floor(Math.random() * plays.length)],
      winner: this.determineWinner(),
    });
    this.toggleHidden();
  };

  determineWinner = () => {
    const { user, computer } = this.state;
    if (user === computer) {
      return "Tie";
    } else if (
      (user === "rock" && computer === "scissor") ||
      (user === "scissor" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      /*    this.setState({ userScore: this.state.userScore + 1 }); */
      return "You win!";
    } else {
      /*       this.setState({ computerScore: this.state.computerScore + 1 }); */
      return "Computer wins, try again";
    }
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  userPlaysRock = () => {
    this.setState({
      user: "rock",
    });
    this.toggleHidden();
  };

  userPlaysPaper = () => {
    this.setState({
      user: "paper",
    });
    this.toggleHidden();
  };
  userPlaysScissors = () => {
    this.setState({
      user: "scissor",
    });
    this.toggleHidden();
  };

  render() {
    const { user, computer, winner } = this.state;
    return (
      <>
       <h1>Rock Paper Scissors</h1>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Images plays={user} />
          </Grid.Column>
          <Grid.Column>
          {!this.state.isHidden && (
          <Images plays={computer} id="computerPlayImg" />
        )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
          <button
          className="playsButton"
          id="button-rock"
          onClick={this.userPlaysRock}
        >
          Rock
        </button>
          </Grid.Column>
          <Grid.Column>
          <button
          className="playsButton"
          id="button-paper"
          onClick={this.userPlaysPaper}
        >
          Paper
        </button>
          </Grid.Column>
          <Grid.Column>
          <button
          className="playsButton"
          id="button-scissor"
          onClick={this.userPlaysScissors}
        >
          Scissor
        </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
       
      

        <p>You'r Choice: {user}</p>

        <button className="playGame" id="button-play" onClick={this.playGame}>
          Start Game
        </button>

        {!this.state.isHidden && ( <div className="winner" id="winner">
          {winner ? this.determineWinner() : " "}
        </div>)

      /*   {/*   <Score userScore={this.state.userScore} computerScore={this.state.computerScore} />  */} 
      </>
    );
  }
}
export default App;
