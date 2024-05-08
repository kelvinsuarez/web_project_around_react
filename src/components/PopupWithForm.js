import React, { useEffect } from "react";

function PopupWithForm(props) {
    useEffect(() =>{
       const handleEscClose = (evt) => {
            if (evt.key == 'Escape'){
                props.onClose()
            }
        };

        const handleClickOutside = (evt) => {
            if (evt.target === document.querySelector(`.popup${props.name}`)){
                props.onClose();
            }
        };

        document.addEventListener("keydown", handleEscClose);
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleEscClose);
            document.addEventListener("click", handleClickOutside);
        }
    }, [])
    return (
        <div className={`popup${props.name} ${props.isOpen ? "popup-opened" : ""} form`} id={props.id}>
            <div className={`popup${props.name}__group`}>
                <h2 className={`popup${props.name}__icon-close popup${props.name}__icon-close:hover`} onClick={props.onClose}>+</h2>
                <form name={props.name} className={`popup${props.name}__container form-popup`} noValidate>
                    <h2 className={`popup${props.name}__text`} >{props.title}</h2>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm