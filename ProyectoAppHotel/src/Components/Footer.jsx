import React from 'react';
import "../Components/Styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="FooterContent">
                <p>
                    2024 HotelPulse. Todos los derechos Reservados 
                </p>
                <div className="FooterLinks">
                    <a href="">Términos de Uso</a>
                    <span>|</span>
                    <a href="">Política de Privacidad</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;