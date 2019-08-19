# React Memory Game [-view](https://jessibramwell.github.io/react-memory-game/)
This app is a simple React exercise designed to demonstrate the value of using components and state.

## How to play

Press the 'Play' button to begin a round. A timer will start counting down from 60. Click a card to turn it over. After two cards have been selected, if a match is found, the cards will remain face up and fade to show they are now inactive. If a match isn't found the cards will remain face up for one second to be quickly committed to memory. Try to find all six matching cards before the timer runs out. The game will reset after every round.

### Technical Description 

This game is made of five main components, a Timer, Stats, Card, Deck, and Game component where state is managed.

A Deck is created from an array of six objects that are structured like this:
```
  {
    id: 1,
    pairId: 1,
    active: false,
    matched: false
  }
```

When a round is initiated by the 'Play' button those six objects are duplicated, given a unique id, and the Deck is randomly arranged.

The Card component uses the 'active' or 'matched' status of each card to determine the if the user is shown the front or back image of the card. The naming convention of the image files include the 'pairId' and that is used to determine which image is shown. An onClick event updates the 'active' and 'matched' status of the card and updates the appropriate image and class.

The Timer component is independent of the rest of the stats to prevent the entire Stats component from re-rendering each second. The Timer component and 'Play' button determine the 'play' status of the game. 

When the timer runs down the 'losses' increase. When each card has been matched the 'wins' increase. Infinite 'wins' and 'losses' are allowed by the game.

#### Road map

User experience needs to be improved after a round has been completed and during the animation when a pair is matched. The rounds end somewhat unceremoniously and timeout interferes with the users ability to click cards quickly.

### Screenshot
 
![React Memory Game in game view](public/img/react-memory-game-play.jpg) 

### Built with:
- React
- Bootstrap


