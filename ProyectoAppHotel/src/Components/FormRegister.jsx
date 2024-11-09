import React, {useState} from "react";
import "../Components/Styles/FormRegister.css";

const FormRegister = () => {
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@gmail\.com$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if(!nombre.trim()){
            newErrors.nombre = "El nombre es obligatorio";
        };

        if(!validateEmail(email)){
            newErrors.email = "El correo debe ser un Gmail válido(ej: usuario@gmail.com).";
        };

        if(!validatePassword(password)){
            newErrors.password = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.";
        };

        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0){
            console.log("Formulario enviado", {nombre, email, password});
        }
    };
    return (
        <div className="RegisterContainer">
            <h2 className="RegisterTitle">Crear Cuenta</h2>
            <p className="RegisterText">
                Unete a la comunidad de Viajeros y ayuda a los demás a descubrir su siguiente aventura.
            </p>
            <form className="RegisterForm" onSubmit={handleSubmit}>
                <div className="RegisterInputGroup">
                    <label htmlFor="nombre" className="RegisterLabel">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="RegisterInput"
                        required
                    />
                    {errors.nombre && <p className="error">{errors.nombre}</p>}
                </div>    
                <div className="RegisterInputGroup">
                    <label htmlFor="email" className="RegisterLabel">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="RegisterInput"
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="RegisterInputGroup">
                    <label htmlFor="password" className="RegisterLabel">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="RegisterInput"
                        required
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit" className="RegisterButton">Registrarse</button>
             </form>
        </div>


    );
};

export default FormRegister;