import React from 'react';
import VectorLapiz  from '../images/profile/lapiz.svg';
import VectorCruz  from '../images/profile/button-add.svg';
import Card from './Card.js';

function Main(props) {

    return (
        <>
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__elipce">
                        <div className="profile__image-edit">
                            <img className="profile__edit-image-button-vector" src={VectorLapiz} onClick={props.onEditAvatarClick}/>
                        </div>
                        <img className="profile__image"  style={{ backgroundImage: `url(${props.userAvatar})` }}/>
                    </div>
                </div>
                <div className="profile__into">
                    <h2 className="profile__title">{props.userName}</h2>
                    <div className="profile__edit-button-square profile__edit-button-square_grey" onClick={props.onEditProfileClick}> </div>
                    <div className="profile__edit-button-square" id="edit-button">
                        <img className="profile__edit-button-vector" src={VectorLapiz} alt="imagen de silueta de lapiz"/>
                    </div>
                    <h3 className="profile__subtitle">{props.userDescription}</h3> 
                </div>
                <div className="profile__add-button profile__add-button_grey" onClick={props.onAddPlaceClick}> </div>
                <div className="profile__add-button profile__add-button:hover">
                    <img className="profile__add-button-cross" src={VectorCruz} alt="cruz"/>
                </div>
            </section>

            <section className="cards">
                
                {props.cards.map((cardIten) => (
                     <Card
                        key={cardIten._id}
                        card={cardIten}
                        api={props.api}
                        userId={props.userId}
                        popupConfirmation={props.PopupWithForm}
                    />
                ))}
            </section>

        </>
    )
}

export default Main;