import React, { useEffect} from 'react';
import Trash from '../images/cards/trash-all.svg';
import likePick from '../images/cards/like-grey.svg';
import {api} from '../utils/api.js'

function Card() {
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cardInfo = await api.getCards();
                setCards(cardInfo)
                
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, []);
 console.log(cards)
    return(
        <>
            <section className="cards">
                
                {cards.map(cardIten => (

                    <div className="cards__element" key={cardIten._id}>
                        <img className="cards__element-pic" src={cardIten.link} alt="carta de paisaje"/>
                
                        <img className="cards__element-trash cards__element-trash:hover" src={Trash} alt="basurero"/>
                
                        <div className="cards__element-text-container">
                            <h2 className="cards__element-text">
                                {cardIten.name}
                            </h2>
                            <div className="cards__element-like cards__element-like:hover" >
                                <img src={likePick} alt="vector corazon"/>
                                <div className="cards__element-like-black cards__element-like-black_on">
                                    <div className="cards__element-like-right-rectangle cards__element-like-parts"></div>
                                    <div className="cards__element-like-left-rectangle cards__element-like-parts"></div>
                                    <div className="cards__element-like-right-circle cards__element-like-parts"></div>
                                    <div className="cards__element-like-left-circle cards__element-like-parts"></div>
                                    <div className="cards__element-like-center-circle cards__element-like-parts"></div>
                                </div>
                            </div>
                            <span className="cards__element-like-counter" >{cardIten.likes ? cardIten.likes.length : ""}</span>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
export default Card;