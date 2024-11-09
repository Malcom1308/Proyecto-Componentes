import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import "../Components/Styles/NavBar.css";

const NavBarRegister = () => {

    const navigate = useNavigate();

    const homePage = () => {
        navigate('/');
    };

    return (
        <header className="header">
            <div className="logo-container" onClick={homePage}>
                <Logo className="logo"/>
            </div>
            <nav className="nav">
                    <a href="">Inicio</a>
                    <a href="">Recomendación</a>
            </nav>
        </header>
    ); 


};
export default NavBarRegister;