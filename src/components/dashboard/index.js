import React, { Component } from 'react';
import AccordionComponent from './../shared/accordion'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.

import 'react-accessible-accordion/dist/fancy-example.css';
import './../../styles/accordion.css';
import {
    TABS
}
from '../../utils/data';
import INIT_SESSION_AND_SECURITY_CONTENT from '../../components/dashboard/dashboard-content/init-session-security';
import ACCOUNT_MANAGEMENT_CONTENT from '../../components/dashboard/dashboard-content/account-management';
import CONNECTIONS_CONTENT from '../../components/dashboard/dashboard-content/connections';
import PHONE_NUMBER_CONTENT from '../../components/dashboard/dashboard-content/phone-number';
import CHANGE_PASSWORD_CONTENT from '../../components/dashboard/dashboard-content/change-password';
import './../../styles/dashboard.css';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            accordionContent: {},
            tabContentIndex: 0,
            showAddMail: false,
            changesSaved: false
        }
    }

    addMail = () => {
        const { showAddMail } = this.state;

        this.setState({ showAddMail: !showAddMail });
    }

    render() {
        const { showAddMail, changesSaved } = this.state;

        return(
            <div className="main-dashboard container">

                <div className="row welcome">
                    <div className="col-md-6">
                    <div className="border-rigth">
                        <img src="images/img_avatar.png" alt="Avatar" />
                        <div className="info-user">
                            <h3>Walther Ayala</h3>
                            <span>waltherayala@gmail.com</span>
                            <h6>Miembro desde 14 de junio 2017</h6>
                        </div>                    
                    </div>
                    </div>
                    <div className="col-md-6 welcome-section">
                        <div className="col-md-8">
                            <h3>Bienvenido</h3>
                            <span>Desde aquí y con tu cuenta de Krowdy podras acceder rápidamente a tus herramientas y funciones para proteger tus datos y tu privacidad.</span>
                        </div>
                        <div className="col-md-4">
                        <img src="images/img_avatar.png" alt="Avatar" />
                        </div>
                    </div>
                </div>
                <div className="div">
                    <div className="tabs row tabs-menu">
                        <div className="col-md-2">
                            Cuenta
                        </div>
                    </div>
                    <div className="tabs-content row">
                        <div className="col-md-3">
                            <ul>
                                <li className="normal active">
                                    Inicio de sesión y seguridad
                                </li>
                                <li className="normal">
                                    Números de celular
                                </li>
                                <li className="normal">
                                    Cambiar contraseña
                                </li>
                                <li className="normal">
                                    Conexiones
                                </li>
                                <li className="normal">
                                    Gestión de cuenta
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                        {/* <AccordionComponent acordions={TABS} getContent={this.getContent} body={accordionContent} > */}
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h5>Inicio de sesión y seguridad</h5>
                                        <h6>Añade o elimina direcciones de correo electrónico en tu cuenta.</h6>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <INIT_SESSION_AND_SECURITY_CONTENT showAddMail={showAddMail} addMail={this.addMail} changesSaved={changesSaved}/>
                                    </AccordionItemBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h5>Números de celular</h5>
                                        <h6>Añade un número de celular para hacer más segura tu cuenta.</h6>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <PHONE_NUMBER_CONTENT />
                                    </AccordionItemBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h5>Cambiar contraseña'</h5>
                                        <h6>Crea una contraseña única para poder proteger tu cuenta.</h6>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <CHANGE_PASSWORD_CONTENT />
                                    </AccordionItemBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h5>Conexiones</h5>
                                        <h6>Redes sociales conectadas a tu cuenta de Krowdy.</h6>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <CONNECTIONS_CONTENT />
                                    </AccordionItemBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h5>Gestión de cuenta</h5>
                                        <h6>Aquí podrás cerrar tu cuenta si deseas.</h6>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <ACCOUNT_MANAGEMENT_CONTENT />
                                    </AccordionItemBody>
                                </AccordionItem>
                            </Accordion>
                        {/* </AccordionComponent> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
