import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <div className="App">

      <div className="root">
        < Header />
        
        < Main />

        <Footer/>

        <div className="popup-confirmation popup-confirmation-opened">
          <div className="popup-confirmation__group">
            <span className="popup-confirmation__icon-close popup-confirmation__icon-close:hover">+</span>
            <div className="popup-confirmation__container">
              <h2 className="popup-confirmation__text">¿Estas seguro/a?</h2>
              <button className="popup-confirmation__button-delete">si</button>
            </div>
          </div>
        </div>

        <div className="popup-image-profile popup-opened" id="popup-image-profile_container" >
          <div className="popup-image-profile__group">
            <h2 className="popup-image-profile__icon-close popup-image-profile__icon-close:hover">+</h2>
            <form name="change_image" className="popup-image-profile__container form-popup" noValidate>
              <h2 className="popup-image-profile__text" >Cambiar foto de perfil</h2>
              <input type="url"
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
            </form>
          </div>
        </div>
      
        <div className="image-zoom image-zoom_opened" id="image-zoom_container" >
          <div className="image-zoom__group">
            <span className="image-zoom__icon-close image-zoom__icon-close:hover">+</span>
            <img className="image-zoom__container" src="https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg" alt="imagen agrandada"/>
            <h2 className="image-zoom__text">Aqui estoy</h2>
          </div>
        </div>

        <div className="popup popup-opened form" id="popup_container" >
          <div className="popup__group">
            <h2 className="popup__icon-close popup__icon-close:hover">+</h2>
            <form name="profile" className="popup__container form__popup" id="form" noValidate>
              <h2 className="popup__text" >Editar Perfil</h2>
              <input type="text" 
                id="nombre"
                name="nombre"
                placeHolder="Nombre" 
                value="Jacques Cousteau" 
                minLength="2" maxlength="40" 
                className="popup__imput-text popup__imput-text_name form__imput-text"
                required
                autoComplete="off"
              />
              <span className="nombre-error form__input-show-error"></span>
              <input type="text" 
                id="acerca"
                name="acerca"
                placeholder="A cerca de mi"
                value="Explorador"
                minlength="2" maxlength="200"
                className="popup__imput-text popup__imput-text_job form__imput-text"
                required
                autoComplete="off"
              />
              <span className="acerca-error form__input-show-error"></span>
              <button className="popup-save popup__button-save popup__button-save:hover" id="button-save">Guardar</button>
            </form>
          </div>
        </div>

        <div className="popup-place popup-opened form" id="popup-place_container" >
          <div className="popup-place__group">
            <h2 className="popup-place__icon-close popup-place__icon-close:hover">+</h2>
            <form name="add_place" className="popup-place__container form-popup" noValidate>
              <h2 className="popup-place__text" >Nuevo Lugar</h2>
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
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
