import React,{useRef} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup (props){
    const titleRef = useRef(null);
    const urlRef = useRef(null);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const newCard = {
            name: titleRef.current.value,
            link: urlRef.current.value,
        }
        props.onAddCard(newCard);
    };
    return(
        <PopupWithForm 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            name="-place" id="popup-place_container" 
            title="Nuevo Lugar" 
            onSubmit={handleSubmit}
        >
            <input 
                type="text"
                id="titulo"
                placeholder="Titulo"
                minLength="2" maxLength="30"
                defaultValue=""
                className="popup-place__imput-text popup-place__imput-text_title form-imput-text"
                required
                autoComplete="off"
                ref={titleRef}
            />
            <span className="titulo-error form-input-show-error"></span>
            <input 
                type="url"
                id="url"
                placeholder="Imagen URL"
                minLength="2" maxLength="200"
                defaultValue=""
                className="popup-place__imput-text popup-place__imput-text_image form-imput-text"
                required
                autoComplete="off" 
                ref={urlRef}
            />
            <span className="url-error form-input-show-error"></span>
            <button className="popup-save popup-place__button-save popup-place__button-save:hover">Guardar</button>
        </PopupWithForm>
    )
};

export default AddPlacePopup;