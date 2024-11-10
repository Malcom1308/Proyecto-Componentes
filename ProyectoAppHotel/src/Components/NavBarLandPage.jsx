import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import UserIcon from "./UserIcon.jsx";
import "../Components/Styles/NavBar.css";

const Navbar = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Logo className="logo"/>
            </div>
            <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/recommendation">Recomendación</Link>
                    <Link to="/">Visitas</Link>
            </nav>
            <div className="user-icon-container">
                <UserIcon/>
            </div>
        </header>
    );
};

export default Navbar;