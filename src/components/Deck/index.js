import cards from "../../cards.json"

class Deck {
  constructor() {
    this.cardSet = []
  }
  
  createPair = () => {
    let count = cards.length;

    cards.forEach(item => {
      let card;
      count++;

      this.cardSet.push(item);

      card = { ...item };
      card.id = count;

      this.cardSet.push(card)
    });

    return this.shuffle(this.cardSet)
  }
  
  shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
}


export default Deck;