import React, { useEffect, useState } from 'react';
import VectorLapiz  from '../images/profile/lapiz.svg';
import VectorCruz  from '../images/profile/button-add.svg';
import Trash from '../images/cards/trash-all.svg'
import likePick from '../images/cards/like-grey.svg'
import {api} from '../utils/api.js'

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await api.getUserInfoFronServer();
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);

                const cardInfo = await api.getCards();
                setCards(cardInfo)
                
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, []);
 console.log(cards)
    return (
        <>
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__elipce">
                        <div className="profile__image-edit">
                            <img className="profile__edit-image-button-vector" src={VectorLapiz} onClick={props.onEditAvatarClick}/>
                        </div>
                        <img className="profile__image"  style={{ backgroundImage: `url(${userAvatar})` }}/>
                    </div>
                </div>
                <div className="profile__into">
                    <h2 className="profile__title">{userName}</h2>
                    <div className="profile__edit-button-square profile__edit-button-square_grey" onClick={props.onEditProfileClick}> </div>
                    <div className="profile__edit-button-square" id="edit-button">
                        <img className="profile__edit-button-vector" src={VectorLapiz} alt="imagen de silueta de lapiz"/>
                    </div>
                    <h3 className="profile__subtitle">{userDescription}</h3> 
                </div>
                <div className="profile__add-button profile__add-button_grey" onClick={props.onAddPlaceClick}> </div>
                <div className="profile__add-button profile__add-button:hover">
                    <img className="profile__add-button-cross" src={VectorCruz} alt="cruz"/>
                </div>
            </section>

            <section className="cards">
                
                {cards.map(cardIten => (
      // Este es un atributo importante: `key`
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

export default Main;