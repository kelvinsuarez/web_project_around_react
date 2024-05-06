import React from "react";

function ImagePopup () {
    return (
        <div className="image-zoom image-zoom_opened" id="image-zoom_container" >
          <div className="image-zoom__group">
            <span className="image-zoom__icon-close image-zoom__icon-close:hover">+</span>
            <img className="image-zoom__container" src="https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg" alt="imagen agrandada"/>
            <h2 className="image-zoom__text">Aqui estoy</h2>
          </div>
        </div>
    )
}

export default ImagePopup