import React from 'react';
import VectorLapiz  from '../images/profile/lapiz.svg';
import VectorCruz  from '../images/profile/button-add.svg';
import Card from './Card.js';

function Main({ onEditProfileClick, 
                onAddPlaceClick, 
                onEditAvatarClick, 
                onCardClick, 
                cards, 
                userId, 
                api, 
                userAvatar, 
                userName, 
                userDescription, 
                onConfirmationDelete }) {
    
    return (
        <>
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__elipce">
                        <div className="profile__image-edit">
                            <img className="profile__edit-image-button-vector" src={VectorLapiz} onClick={onEditAvatarClick}/>
                        </div>
                        <img className="profile__image"  style={{ backgroundImage: `url(${userAvatar})` }}/>
                    </div>
                </div>
                <div className="profile__into">
                    <h2 className="profile__title">{userName}</h2>
                    <div className="profile__edit-button-square profile__edit-button-square_grey" onClick={onEditProfileClick}> </div>
                    <div className="profile__edit-button-square" id="edit-button">
                        <img className="profile__edit-button-vector" src={VectorLapiz} alt="imagen de silueta de lapiz"/>
                    </div>
                    <h3 className="profile__subtitle">{userDescription}</h3> 
                </div>
                <div className="profile__add-button profile__add-button_grey" onClick={onAddPlaceClick}> </div>
                <div className="profile__add-button profile__add-button:hover">
                    <img className="profile__add-button-cross" src={VectorCruz} alt="cruz"/>
                </div>
            </section>

            <section className="cards">
                
                {cards.map((cardItem) => {
                    const canBeDelete = cardItem.owner._id === userId;
                    console.log('CardItem:', cardItem);
                    console.log('CanBeDelete:', canBeDelete);
                    return(<Card
                        key={cardItem._id}
                        canBeDelete= {canBeDelete}
                        card={cardItem}
                        api={api}
                        userId={userId}
                        onConfirmationDelete={onConfirmationDelete} 
                        handleCardClick={onCardClick}
                    />)
                })}
            </section>

        </>
    )
}

export default Main;