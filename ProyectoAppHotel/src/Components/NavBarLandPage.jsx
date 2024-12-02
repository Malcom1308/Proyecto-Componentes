import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import UserIcon from "./UserIcon.jsx";
import "../Components/Styles/NavBar.css";

const Navbar = () => {

    const navigate = useNavigate();

    const homePage = () => {
        navigate('/');
    };

    const userPage = () =>{
        navigate ('/profile');
    }

    return (
        <header className="header">
            <div className="logo-container" onClick={homePage}>
            <Logo className="logo"/>
            </div>
            <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/recommendation">Recomendación</Link>
                    <Link to="/visitas">Visitas</Link>
            </nav>
            <div className="user-icon-container" onClick={userPage}>
                <UserIcon/>
            </div>
        </header>
    );
};

export default Navbar;