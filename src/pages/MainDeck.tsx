import { useState, useEffect } from 'react';
import { deck } from '../helpers/deckInfo';
import { cardType } from '../helpers/interfaces';
import { shuffleDeck } from '../helpers/functions';
import "../styles/maindeck.css"

//NOTE working on the display of the newDeck array.

// const MainDeck: React.FunctionComponent<interfacehere> = props => {
const MainDeck: React.FunctionComponent = props => {

    // const [ thisDeck, setThisDeck ] = useState<cardType[]>([]);

    // let forDisplay:Array<cardType> = () => {
    let forDisplay = ():void => {
    // let forDisplay = ():any => {

        shuffleDeck(deck).map((d,i):React.ReactNode => {
        // thisDeck.map((d,i) => {
            console.log(d)
            return (

                <div key={i} className="card-display">
                    <div className="card">
                        <h1>{d.value}</h1>
                        {/* <img src={`../assets/${d.suit}.png`} alt={`${d.suit}`} /> */}
                        <img src='../assets/club.png' alt={`${d.suit}`} />
                    </div>
                </div>

                )
        })
        
    }

    // useEffect(() => {
    // }, [])

    return(
        <>
            {/* { forDisplay() } */}
            {
                // shuffleDeck(deck).map((d,i):React.ReactNode => {
                shuffleDeck(deck).map((d,i):any => {
                    // thisDeck.map((d,i) => {
                        console.log(d,i)
                        return (
            
                            <div key={i} className="card-display">
                                <div className="card">
                                    <h1>{d.value}</h1>
                                    {/* <img src={`../assets/${d.suit}.png`} alt={`${d.suit}`} /> */}
                                    <img src='../assets/club.png' alt={`${d.suit}`} />
                                </div>
                            </div>
            
                            )
                    })
            }
        </>
    )

}

export default MainDeck;