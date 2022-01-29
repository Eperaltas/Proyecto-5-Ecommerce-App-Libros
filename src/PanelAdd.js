import React from 'react';



import { signup } from './services';



function PanelAdd({ onhide }) {

    const handleSignup = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);

        const dataObject = Object.fromEntries(formData);



        const user = await signup(dataObject);



        if (user) {

            console.log(user);

            e.target.reset();

            onhide();

        } else {

            alert('Error, revisa tus datos');

        }



    }

    return (

        <div className="new-item-panel-container">

            <div className="new-item-panel">

                <form onSubmit={handleSignup}>

                    <label>Nombre</label><br />

                    <input type="text" name="firstname" className="input" /><br />



                    <label>Apellido</label><br />

                    <input type="text" name="lastname" className="input" /><br />



                    <label>Correo electrónico</label><br />

                    <input type="email" name="mail" className="input" /><br />

                    <label>Crear contraseña</label><br />

                    <input type="password" name="password" className="input" /><br />



                    <label>Confirmar contraseña</label><br />

                    <input type="password" name="passwordConfirm" className="input" /><br />



                    <input type="submit" className="button btn-blue" value="Crear cuenta" />

                    <button className="button btn-normal" onClick={onhide}>Cancelar</button>

                </form>

            </div>

        </div>

    );

}



export default PanelAdd;