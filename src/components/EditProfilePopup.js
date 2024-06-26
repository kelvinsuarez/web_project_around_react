import React, { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup (prosp){
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, prosp.isOpen]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        prosp.onUpdateUser({
            name,
            about: description,
        })
    }
return(
    
    <PopupWithForm 
        isOpen={prosp.isOpen} 
        onClose={prosp.onClose} 
        name="-profile" 
        id="popup-profile_container" 
        title="Editar Perfil"
        onSubmit={handleSubmit}
    >
    <input 
      type="text" 
      id="nombre"
      name="nombre"
      placeholder="Nombre" 
      defaultValue={name}
      minLength="2" 
      maxLength="40" 
      className="popup-profile__imput-text popup-profile__imput-text_name form__imput-text"
      required
      autoComplete="off"
      onChange={handleNameChange}
    />
    <span className="nombre-error form__input-show-error"></span>
    <input 
      type="text" 
      id="acerca"
      name="acerca"
      placeholder="A cerca de mi"
      defaultValue={description}
      minLength="2" 
      maxLength="200"
      className="popup-profile__imput-text popup-profile__imput-text_job form__imput-text"
      required
      autoComplete="off"
      onChange={handleDescriptionChange}
    />
    <span className="acerca-error form__input-show-error"></span>
    <button className="popup-save popup-profile__button-save popup-profile__button-save:hover" id="button-save">Guardar</button>
  </PopupWithForm>
    
)
};
export default EditProfilePopup