import { useState } from 'react';
import { deck } from '../helpers/deckInfo';
import { cardType } from '../helpers/interfaces';
import { shuffleDeck } from '../helpers/functions';
import "../styles/maindeck.css"

// const MainDeck: React.FunctionComponent<interfacehere> = props => {
const MainDeck: React.FunctionComponent = props => {

    const [ thisDeck, setThisDeck ] = useState<cardType[]>(deck);

    // let forDisplay:Array<cardType> = shuffleDeck(deck);
    // setThisDeck(forDisplay);

    // console.log(thisDeck);

    return(
        <>
            {thisDeck.map((d,i) => {
                
                return (

                    <div key={i} className="card-display">
                        <div className="card">
                            <h1>{d.value}</h1>
                            {/* <p>{d.suit}</p> */}
                            {/* <img src={`../assets/${d.suit}.png`} alt={`${d.suit}`} /> */}
                            <img src='../assets/club.png' alt={`${d.suit}`} />
                        </div>
                    </div>

                )
            })}
        </>
    )

}

export default MainDeck;