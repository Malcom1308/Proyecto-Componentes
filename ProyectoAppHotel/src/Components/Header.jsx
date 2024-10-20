import React from "react";
import Logo from "./Logo.jsx";
import UserIcon from "./UserIcon";
import "../Components/Styles/Header.css"; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Logo className="logo"/>
            </div>
            <nav className="nav">
                    <a href="">Inicio</a>
                    <a href="">Recomendación</a>
                    <a href="">Visitas</a>
            </nav>
            <div className="user-icon-container">
                <UserIcon/>
            </div>
        </header>
    );
};

export default Header;