import React from "react";
import Logo from '../images/header/Vector.svg';

function Header() {
    return (
        <header class="header">
          <img className="header__logo" src={Logo} alt="logo around the U.S"/>
          <hr className="header__line"/>
        </header>
    )
}

export default Header;