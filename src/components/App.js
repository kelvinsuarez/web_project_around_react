import React, { useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {api} from '../utils/api.js'



function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(true);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(true);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(true);
  const [isConfirmacionPopupOpen, setIsConfirmacionPopupOpen] = React.useState(true);
  const [selectedCard, setSelectedCard] = React.useState(true)
  
  
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [currentUser, setCurrentUser] = React.useState();
  const [cards, setCards] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const userData = await api.getUserInfoFronServer();
              setUserName(userData.name);
              setUserDescription(userData.about);
              setUserAvatar(userData.avatar);
              setCurrentUser(userData._id)

              const cardInfo = await api.getCards();
              setCards(cardInfo)
                
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(false);
    
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(false)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(false)
  }

  const handleConfirmationClick =() => {
    setIsConfirmacionPopupOpen(false)
  }

  const handleCardClick = () => {
    setSelectedCard(false);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(true);
    setIsEditProfilePopupOpen(true);
    setIsAddPlacePopupOpen(true);
    
  }

  return (
    <div className="App">

      <div className="root">
        < Header />
        
        < Main 
          onEditProfileClick={handleEditProfileClick} 
          onAddPlaceClick={handleAddPlaceClick} 
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          userId={currentUser}
          api={api}
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
          image

        />

        <Footer/>

        <PopupWithForm 
          isOpen={handleConfirmationClick} 
          onClose={closeAllPopups} 
          name="-confirmation" 
          id="" 
          title="¿Estas seguro/a?"
        
        >
          <button className="popup-confirmation__button-delete">si</button>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="-image-profile" id="popup-image-profile_container" title="Cambiar foto de perfil">
          <input 
            type="url"
            id="url-profile"
            placeholder="Imagen URL"
            minLength="2" maxLength="200"
            defaultValue=""
            className="popup-image-profile__imput-text form-imput-text"
            required
            autoComplete="off"
          />
          <span className="url-profile-error form-input-show-error"></span>
          <button className="popup-save popup-image-profile__button-save popup-image-profile__button-save:hover">Guardar</button>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="-profile" id="popup-profile_container" title="Editar Perfil">
          <input 
            type="text" 
            id="nombre"
            name="nombre"
            placeholder="Nombre" 
            defaultValue="Jacques Cousteau" 
            minLength="2" maxLength="40" 
            className="popup-profile__imput-text popup-profile__imput-text_name form__imput-text"
            required
            autoComplete="off"
          />
          <span className="nombre-error form__input-show-error"></span>
          <input 
            type="text" 
            id="acerca"
            name="acerca"
            placeholder="A cerca de mi"
            defaultValue="Explorador"
            minLength="2" maxLength="200"
            className="popup-profile__imput-text popup-profile__imput-text_job form__imput-text"
            required
            autoComplete="off"
          />
          <span className="acerca-error form__input-show-error"></span>
          <button className="popup-save popup-profile__button-save popup-profile__button-save:hover" id="button-save">Guardar</button>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="-place" id="popup-place_container" title="Nuevo Lugar">
          <input 
            type="text"
            id="titulo"
            placeholder="Titulo"
            minLength="2" maxLength="30"
            defaultValue=""
            className="popup-place__imput-text popup-place__imput-text_title form-imput-text"
            required
            autoComplete="off"
          />
          <span className="titulo-error form-input-show-error"></span>
          <input type="url"
            id="url"
            placeholder="Imagen URL"
            minLength="2" maxLength="200"
            defaultValue=""
            className="popup-place__imput-text popup-place__imput-text_image form-imput-text"
            required
            autoComplete="off"
          />
          <span className="url-error form-input-show-error"></span>
          <button className="popup-save popup-place__button-save popup-place__button-save:hover">Guardar</button>
        </PopupWithForm>

      </div>

    </div>
  );
}

export default App;
