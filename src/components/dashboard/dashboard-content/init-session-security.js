import React from 'react';
import '../../../styles/init-session-security.css';

const INIT_SESSION_AND_SECURITY_CONTENT = () => {
    return (
        <div className="main-table">
            <table>
                <tbody>
                    <tr>
                        <td>llanca@gmail.com</td>
                        <td>Seleccionar como principal</td>
                        <td>Eliminar</td>
                    </tr>
                    <tr>
                        <td>llanca@gmail.com</td>
                        <td>Seleccionar como principal</td>
                        <td>Eliminar</td>
                    </tr>
                    <tr>
                        <td>llanca@gmail.com</td>
                        <td>Seleccionar como principal</td>
                        <td>Eliminar</td>
                    </tr>
                </tbody>
            </table>
            <span>Añadir correo</span>
            <div className="add-mail row">
                <input type="mail" className="col-md-5" placeholder="Ingresa tu correo electrónico"/>
                <button className="col-md-3">Enviar verificación</button>
                <span className="col-md-1">Cancelar</span>
            </div>
            <div className="verification row">
                <div className="col-md-2">
                    <img src="images/img_avatar.png" alt="Avatar" />
                </div>
            </div>
        </div>
        
    )
};

export default INIT_SESSION_AND_SECURITY_CONTENT;
