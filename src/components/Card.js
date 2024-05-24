import React, {useState, useEffect} from 'react';
import trash from '../images/cards/trash-all.svg';
import likeIcon from '../images/cards/like-grey.svg';
import PopupWithImage from './ImagePopup.js'

function Card({ card, userId, api, popupConfirmation }) {
    const {name, link, _id, canBeDelete, likes} = card;
    const [isLiked, setIsLiked] = useState(likes.some((like) => like._id === userId));
    const [likeCount, setLikeCount] = useState(likes.length);
    const popupWithImage = new PopupWithImage(".image-zoom");
    
    const handleImageClick = () => {
        popupWithImage.open(link, name)
    }
    const toggleLike = async () => {
        try {
            let newLikeCount;
            if (isLiked) {
                const result = await api.deleteLikeFromCard(_id);
                newLikeCount = result.likes.length;
            } else {
                const result = await api.showLikeFromCard(_id);
                newLikeCount = result.likes.length;
            }
            setIsLiked(!isLiked);
            setLikeCount(newLikeCount);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteCard = async () => {
        popupConfirmation.loadingAction(true);
        try {
            await api.deleteCardFromServer(_id);
            popupConfirmation.close();
        } catch (err) {
            console.log(err);
        }finally{
            popupConfirmation.loadingAction(false);
        }
    };
    
    return(
        <>
            <div className="cards__element" data-id={_id}>
                <img 
                className="cards__element-pic" 
                src={link} 
                alt={name}
                onClick={handleImageClick}
                />
                
                {canBeDelete && (<img 
                                    className="cards__element-trash cards__element-trash:hover" 
                                    src={trash} 
                                    alt="basurero"
                                    onClick={() => popupConfirmation.open(deleteCard)}
                                    />)}
                
                <div className="cards__element-text-container">
                    <h2 className="cards__element-text">
                        {name}
                    </h2>
                    <div className="cards__element-like cards__element-like:hover" >
                        <img src={likeIcon} alt="vector corazon" onClick={toggleLike}/>
                        <div className={`cards__element-like-black ${ isLiked ? '' : 'cards__element-like-black_on'}`}
                        onClick={toggleLike}>
                            <div className="cards__element-like-right-rectangle cards__element-like-parts"></div>
                            <div className="cards__element-like-left-rectangle cards__element-like-parts"></div>
                            <div className="cards__element-like-right-circle cards__element-like-parts"></div>
                            <div className="cards__element-like-left-circle cards__element-like-parts"></div>
                            <div className="cards__element-like-center-circle cards__element-like-parts"></div>
                        </div>
                    </div>
                    <span className="cards__element-like-counter" >{likeCount}</span>
                </div>
            </div>
        </>
    )
}
export default Card;