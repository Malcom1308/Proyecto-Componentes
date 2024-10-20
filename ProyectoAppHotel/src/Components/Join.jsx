import React from 'react';
import "../Components/Styles/Join.css";


const Join = () => {
    const RegisterClick = () => {
        window.location.href = '/Register';
    };

    return (
        <div className="JoinContainer">
            <h2>
                ¿Estás preparado para valorar?
            </h2>
            <p>
                únete a esta comunidad de viajeros y valora tu experiencia por todo el mundo.
                Ayuda a los demás a conocer el mejor lugar para hospedarse.
            </p>
            <button onClick={RegisterClick}>
                Registrate
            </button>
        </div>
    );
};

export default Join;