import React from "react";
import NavBarRegister from "../Components/NavBarRegister";
import FormRegister from "../Components/FormRegister";
import "../Components/Styles/Register.css";

const Register = () => {
    return(

        <div className="RegisterPage">
            <NavBarRegister/>
                <div className="RegisterContent">
                    <FormRegister/>
                </div>   
        </div>
    );


};

export default Register;