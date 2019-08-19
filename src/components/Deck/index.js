import cards from "../../cards.json"

class Deck {
  constructor() {
    this.cardSet = []
  }
  
  // Duplicate cards to create pairs 
  createPair = () => {
    // card id beginning at 6 to ensure they are unique 
    let count = cards.length;

    cards.forEach(item => {
      let card;
      count++;

      // add original card to cardSet array
      this.cardSet.push(item);

      // make a copy of the card and update the id
      card = { ...item };
      card.id = count;

       // add new card to cardSet array
      this.cardSet.push(card)
    });

    return this.shuffle(this.cardSet)
  }
  
  shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
}


export default Deck;