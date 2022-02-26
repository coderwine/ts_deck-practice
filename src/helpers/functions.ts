import { cardType } from './interfaces'

export let shuffleDeck = (deck: Array<cardType>):Array<cardType> => {
    //* This will take the deck built and shuffle the cards.

    let cardCount: number = deck.length; // storing card quanity so that users could potentially create their own decks.
    let baseDeck: Array<cardType> = deck; // storing original deck
    let newDeck: Array<cardType> = []; // for newly shuffled cards

    for(let i:number=cardCount; i > 0; i--) {

        // console.log("i", i);

        if(cardCount >= 0) {

            // console.log(cardCount)
            let x = Math.floor(Math.random() * cardCount);
            // console.log(x);
            // console.log(baseDeck[x]);

            newDeck.push(baseDeck[x])
            baseDeck.splice(x, 1);
    
            cardCount--
            // console.log('cardCount', cardCount);

        } 
        
    }

    // console.log('Base Deck', baseDeck);
    // console.log('New Deck', newDeck);

    // console.table(newDeck);
    
    return newDeck;
    
}