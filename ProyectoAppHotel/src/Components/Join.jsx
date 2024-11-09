import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Components/Styles/Join.css";



const Join = () => {
    const navigate = useNavigate();

    const RegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="JoinContainer">
            <h2>
                ¿Estás preparado para valorar?
            </h2>
            <p>
                Únete a nuestra vibrante comunidad de viajeros apasionados y comparte tus experiencias de viaje por todo el mundo. 
                Comparte tus valoraciones sobre los hoteles en los que te has hospedado, y ayuda a otros a descubrir los mejores 
                lugares para quedarse. Tu opinión puede marcar la diferencia para futuros aventureros, ayudándolos a encontrar 
                opciones de alojamiento que se adapten a sus necesidades y expectativas. Juntos, creamos una red de recomendaciones
                confiables para hacer que cada viaje sea una experiencia inolvidable.
            </p>
            <button onClick={RegisterClick}>
                Registrate
            </button>
        </div>
    );
};

export default Join;