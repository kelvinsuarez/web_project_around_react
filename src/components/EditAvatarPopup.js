import React,{useRef} from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup (prosp){
    const AvatarRef = useRef(null)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        prosp.onUpdateAvatar(AvatarRef.current.value)
    }
    return(
        <PopupWithForm 
            isOpen={prosp.isOpen} 
            onClose={prosp.onClose} 
            name="-image-profile" 
            id="popup-image-profile_container" 
            title="Cambiar foto de perfil"
            onSubmit={handleSubmit}
        >
            <input 
                type="url"
                id="url-profile"
                placeholder="Imagen URL"
                minLength="2" maxLength="200"
                defaultValue=""
                className="popup-image-profile__imput-text form-imput-text"
                required
                autoComplete="off"
                ref={AvatarRef}
            />
            <span className="url-profile-error form-input-show-error"></span>
            <button className="popup-save popup-image-profile__button-save popup-image-profile__button-save:hover">Guardar</button>
        </PopupWithForm>
    )
}

export default EditAvatarPopup