import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import './App.css';

let cardSet = []
createPair(cards)
shuffle(cardSet)

class App extends Component {
  state = {
    cardSet
  };

  render() {

    return (
      <Wrapper>
        {this.state.cardSet.map(item => (
          <Card
            id={item.id}
            pairId={item.pairId}
            key={item.id} />
        ))}
      </Wrapper>

    );
  }

}
function createPair(arr) {
  let count = arr.length;
  arr.forEach(item => {
    count++;

    cardSet.push(item);
    console.log(item);

    let card = Object.create(item);
    card.id = count;
    card.pariId = item.pairId
    console.log(card);

    cardSet.push(card)
  });

}

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}



export default App;
