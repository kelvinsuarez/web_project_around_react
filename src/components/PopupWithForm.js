import React from "react";

function PopupWithForm(props) {
    return (
        <div className={`popup${props.name} ${props.isOpen ? "popup-opened" : ""} form`} id={props.id}>
            <div className={`popup${props.name}__group`}>
                <h2 className={`popup${props.name}__icon-close popup${props.name}__icon-close:hover`}>+</h2>
                <form name={props.name} className={`popup${props.name}__container form-popup`} noValidate>
                    <h2 className={`popup${props.name}__text`} >{props.title}</h2>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm