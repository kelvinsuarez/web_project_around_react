import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';


function App() {
  return (
    <div className="App">

      <div className="root">
        < Header />
        
        < Main />

        <Footer/>

        <PopupWithForm name="-confirmation" id="" title="¿Estas seguro/a?">
          <button className="popup-confirmation__button-delete">si</button>
        </PopupWithForm>

        <PopupWithForm name="-image-profile" id="popup-image-profile_container" title="Cambiar foto de perfil">
          <input 
            type="url"
            id="url-profile"
            placeholder="Imagen URL"
            minLength="2" maxLength="200"
            value=""
            className="popup-image-profile__imput-text form-imput-text"
            required
            autoComplete="off"
          />
          <span className="url-profile-error form-input-show-error"></span>
          <button className="popup-save popup-image-profile__button-save popup-image-profile__button-save:hover">Guardar</button>
        </PopupWithForm>

      
        <div className="image-zoom image-zoom_opened" id="image-zoom_container" >
          <div className="image-zoom__group">
            <span className="image-zoom__icon-close image-zoom__icon-close:hover">+</span>
            <img className="image-zoom__container" src="https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg" alt="imagen agrandada"/>
            <h2 className="image-zoom__text">Aqui estoy</h2>
          </div>
        </div>

        <PopupWithForm name="-profile" id="popup-profile_container" title="Editar Perfil">
          <input 
            type="text" 
            id="nombre"
            name="nombre"
            placeHolder="Nombre" 
            value="Jacques Cousteau" 
            minLength="2" maxlength="40" 
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
            value="Explorador"
            minlength="2" maxlength="200"
            className="popup-profile__imput-text popup-profile__imput-text_job form__imput-text"
            required
            autoComplete="off"
          />
          <span className="acerca-error form__input-show-error"></span>
          <button className="popup-save popup-profile__button-save popup-profile__button-save:hover" id="button-save">Guardar</button>
        </PopupWithForm>

        <PopupWithForm name="-place" id="popup-place_container" title="Nuevo Lugar">
          <input 
            type="text"
            id="titulo"
            placeholder="Titulo"
            minLength="2" maxLength="30"
            value=""
            className="popup-place__imput-text popup-place__imput-text_title form-imput-text"
            required
            autoComplete="off"
          />
          <span className="titulo-error form-input-show-error"></span>
          <input type="url"
            id="url"
            placeholder="Imagen URL"
            minLength="2" maxLength="200"
            value=""
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
