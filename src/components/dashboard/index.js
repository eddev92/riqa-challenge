import React, { Component } from 'react';
import AccordionComponent from './../shared/accordion'
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
            tabContentIndex: 0
        }
    }

    getContent = (id) => {
        console.log(id)
        switch (id) {
            case 1: 
                this.setState({ tabContentIndex: id });
                break;
            case 2: 
                return this.setState({ tabContentIndex: id });
            case 3: 
                return this.setState({ tabContentIndex: id });
            case 4: 
                return this.setState({ tabContentIndex: id });
            case 5: 
                return this.setState({ tabContentIndex: id });
            default:
                return this.setState({ tabContentIndex: id });
        }
    }

    renderContentBody = () => {
        const { tabContentIndex } = this.state;
        let content;
        
         switch (tabContentIndex) {
             case 1: 
                 return <INIT_SESSION_AND_SECURITY_CONTENT />
             case 2: 
                 return <PHONE_NUMBER_CONTENT />
             case 3: 
                 return <CHANGE_PASSWORD_CONTENT />
             case 4: 
                 return <CONNECTIONS_CONTENT />
             case 5: 
                 return <ACCOUNT_MANAGEMENT_CONTENT />
             default:
                 return <INIT_SESSION_AND_SECURITY_CONTENT />;
         }
    }

    render() {
        const { accordionContent, tabContentIndex } = this.state;
        console.log(accordionContent, 'content')
        const content = this.renderContentBody(tabContentIndex);

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
                        <AccordionComponent acordions={TABS} getContent={this.getContent} body={accordionContent} >
                            {content && content}
                        </AccordionComponent>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
