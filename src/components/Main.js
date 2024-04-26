import VectorLapiz  from '../images/profile/lapiz.svg';
import VectorCruz  from '../images/profile/button-add.svg'

function Main() {
    const handleEditAvatarClick = () => {
        const avatar = document.querySelector(".popup-image-profile")
        avatar.classList.remove("popup-opened")
    }

    const handleEditProfileClick = () => {
        const profile = document.querySelector(".popup-profile")
        profile.classList.remove("popup-opened")
    }

    const handleAddPlaceClick = () => {
        const addPlace = document.querySelector(".popup-place")
        addPlace.classList.remove("popup-opened")
    }

    return (
        <>
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__elipce">
                        <div className="profile__image-edit">
                            <img className="profile__edit-image-button-vector" src={VectorLapiz} onClick={handleEditAvatarClick}/>
                        </div>
                        <img className="profile__image"  alt="foto de perfil foto de perfil foto de perfil"/>
                    </div>
                </div>
                <div className="profile__into">
                    <h2 className="profile__title">Jacques Cousteau</h2>
                    <div className="profile__edit-button-square profile__edit-button-square_grey" onClick={handleEditProfileClick}> </div>
                    <div className="profile__edit-button-square" id="edit-button">
                        <img className="profile__edit-button-vector" src={VectorLapiz} alt="imagen de silueta de lapiz"/>
                    </div>
                    <h3 className="profile__subtitle">Explorador</h3> 
                </div>
                <div className="profile__add-button profile__add-button_grey" onClick={handleAddPlaceClick}> </div>
                <div className="profile__add-button profile__add-button:hover">
                    <img className="profile__add-button-cross" src={VectorCruz} alt="cruz"/>
                </div>
            </section>

            <section className="cards"></section>
        </>
    )
}

export default Main;