import { cardType } from './interfaces';

const deckValues:Array<number | string> = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
export let deck:Array<cardType> = [];

class CardDeck {

    constructor (value:string | number, suit: string) {
        this.value = value;
        this.suit = suit;
    }

    value: string | number;
    suit: string

}

const mapDeck = (suit:Array<string | number>, t:string):void => {

    suit.map((x:string | number) => {
        let placeCard:CardDeck = new CardDeck(x, t)
        deck.push(placeCard);
    })

}

mapDeck(deckValues, 'diamond');
mapDeck(deckValues, 'club');
mapDeck(deckValues, 'heart');
mapDeck(deckValues, 'spade');
