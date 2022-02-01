import React from 'react';

import { signup, login } from './services';
import { useNavigate } from 'react-router-dom';

import './Signup.css';

function Signup({ setToken, type }) {
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);

        const user = type ? await signup(dataObject) : await login(dataObject);

        if (user) {
            setToken(user.detail);
            e.target.reset();
            navigate('/')
        } else {
            alert('Error, revisa tus datos');
        }

    }

    return (
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit={handleSignup}>
                    {
                        type &&
                        <>
                            <label>Nombre</label><br />
                            <input type="text" name="firstname" className="input" /><br />

                            <label>Apellido</label><br />
                            <input type="text" name="lastname" className="input" /><br />
                        </>
                    }
                    <label>Correo electrónico</label><br />
                    <input type="email" name="mail" className="input" /><br />

                    <label>{type ? 'Crear contraseña' : 'Contraseña'}</label><br />
                    <input type="password" name="password" className="input" /><br />

                    {
                        type &&
                        <>
                            <label>Confirmar contraseña</label><br />
                            <input type="password" name="passwordConfirm" className="input" /><br />
                        </>
                    }
                    <input type="submit" className="button btn-blue" value={type ? 'Crear cuenta' : 'Iniciar sesión'} />
                    <button className="button btn-normal" onClick={() => { navigate('/') }}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;