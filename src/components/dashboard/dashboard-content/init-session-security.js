import React from 'react';
import '../../../styles/init-session-security.css';

const INIT_SESSION_AND_SECURITY_CONTENT = ({ showAddMail,  addMail = () => {}, changesSaved }) => {
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
            <span className="add blue-font" onClick={addMail}>Añadir correo</span>
            {
            showAddMail 
                && 
            <div>
                <div className="add-mail row">
                    <input type="mail" className="col-md-5" placeholder="Ingresa tu correo electrónico"/>
                    <button className="col-md-3">Enviar verificación</button>
                    <span className="col-md-1" onClick={addMail}>Cancelar</span>
                </div>
                <div className="verification row">
                    <div className="col-md-2">
                        <img src="images/img_avatar.png" alt="Avatar" />
                    </div>
                    <div className="col-md-10 text-left main-verification">
                        <span>Verificacion</span>
                        <h6 className="fz08">Para tu seguridad, introduce tu contraseña para realizar este cambio.</h6>
                        <div className="verification-content row">
                            <input type="mail" className="col-md-5" placeholder="Ingresa contraseña"/>
                            <button className="col-md-3">Listo</button>
                            <button className="col-md-3 white" onClick={addMail}>Cancelar</button>
                        </div>
                        <span className="blue-font forgot-password">Olvidaste tu contraseña</span>
                    </div>
                </div>
            </div>
        }
            {changesSaved && <div class="alert alert-success" role="alert">
            Cambios guardados
            </div>}
        </div>
        
    )
};

export default INIT_SESSION_AND_SECURITY_CONTENT;
