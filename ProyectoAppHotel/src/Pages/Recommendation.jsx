import React from "react";
import Navbar from "../Components/NavBarLandPage";
import PaginaRecomendacion from "../Components/PaginaRecomendacion.jsx";

const Recommedation = () => {

    return(
        <div className="RegisterPage">
            <Navbar/>
            <div className="RegisterContent">
                <PaginaRecomendacion/>
            </div>
        </div>
    );


}

export default Recommedation;