import { cardType } from './interfaces'

export let shuffleDeck = (deck: Array<{}>):void => {
    // This will take the deck built and shuffle the cards.
    // console.table(deck);

    let baseDeck: Array<{}> = deck;
    let newDeck: Array<{}> = [];

    for(let i=0; i< baseDeck.length; i++) {

        let x = Math.floor(Math.random() * baseDeck.length);
        // console.log(x);
        baseDeck.splice(i, 1);
        newDeck.push(baseDeck[x])

    }

    console.log('Base Deck', baseDeck);
    console.log('New Deck', newDeck);

    console.table(newDeck)    
    
}