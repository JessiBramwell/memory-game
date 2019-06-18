import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import Stats from '../Stats';
import Deck from '../Deck';
import Card from "../Card"

let cardSet = []

class Game extends Component {
  constructor() {
    super();
    this.deck = new Deck();
    cardSet = this.deck.cardSet
    this.deck.createPair()
  }

  gameInit = () => {
    this.reset(cardSet)
    this.deck.shuffle(cardSet);
    this.setState({ cardSet, play: true })
    this.startTimer();
  }

  state = {
    cardSet,
    sec: 60,
    play: false,
    guess: [],
    wins: 0,
    losses: 0
  }

  startTimer = () => {
    let countDown = 60;
    let losses = this.state.losses;

    const count = () => {
      if (this.state.sec <= 0) {
        losses++
        clearInterval(this.timer)
        this.setState({
          play: false,
          losses: losses
        });
      } else {
        this.setState({ sec: countDown-- })
      }
    }

    this.timer = setInterval(count, 1000);
  }

  reset = () => {
    cardSet.map(item => {
      if (this.state.play) {
        return item.active = false;
      } else {
        return (
          item.active = false,
          item.matched = false
        )
      }
    });

    this.setState({
      guess: [],
      cardSet,
      sec: 60
    });
  }

  guessHandler = (id) => {
    // find id in array of cards
    let selected = cardSet.find(el => el.id === id);
    selected.active = true;

    this.setState({
      guess: [...this.state.guess, selected],
      cardSet
    }, () => {

      this.compair(this.state.guess);
    });
  }

  compair = (arr) => {
    // compair if guess arr == 2
    if (arr.length === 2) {
      // if pairId match update match status and empty guess array
      if (arr[0].pairId === arr[1].pairId) {

        arr[0].matched = true
        arr[1].matched = true
        this.setState({ cardSet });
        this.checkWin();
      }

      setTimeout(() => {
        this.reset(cardSet)
      }, 1000);

    } else {
      return
    }

  }

  checkWin = () => {
    let wins = this.state.wins;
    let matched = cardSet.every(el => el.matched === true); 

    if(matched) {
      wins++
      clearInterval(this.timer);
      this.setState({ 
        wins: wins,
        play: false
      })
    } else {
      return
    }
  }

  render() {

    return (
      <Wrapper>
        <Stats
          timer={this.state.sec}
          wins={this.state.wins}
          losses={this.state.losses}
          play={this.state.play}
          init={this.gameInit}
        />
        {this.state.cardSet.map(item => (
          <Card
            guess={this.guessHandler}
            id={item.id}
            pairId={item.pairId}
            key={item.id}
            active={item.active}
            matched={item.matched}
          />
        ))}
      </Wrapper>
    );
  }
}


export default Game;
