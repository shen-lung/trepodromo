import React, {Component} from 'react';

import '../css/Trepodromo.css';
import '../bootstrap4/css/bootstrap.css';

export default class MobileMenu extends Component {
    render() {
        return (
            <div className="mobile-menu d-md-none">
                <a className="img-container" href="/">
                    <img className="menu-img" src={require("../css/img/menu/1.jpg")}/>
                    <div className="img-link-text escalada">Escalada</div>
                </a>
                <a className="img-container" href="/clases">
                    <img className="menu-img" src={require("../css/img/menu/2.jpg")}/>
                    <div className="img-link-text clases">Clases</div>
                </a>
                <a className="img-container" href="/cursos">
                    <img className="menu-img" src={require("../css/img/menu/3.jpg")}/>
                    <div className="img-link-text cursos">Cursos</div>
                </a>
                <a className="img-container" href="/eventos">
                    <img className="menu-img" src={require("../css/img/menu/4.jpg")}/>
                    <div className="img-link-text eventos">Eventos</div>
                </a>
                <a className="img-container" href="/fotos">
                    <img className="menu-img" src={require("../css/img/menu/5.jpg")}/>
                    <div className="img-link-text fotos ">Fotos</div>
                </a>
                <a className="img-container" href="/quienes_somos">
                    <img className="menu-img" src={require("../css/img/menu/6.jpg")}/>
                    <div className="img-link-text quienes_somos">Quienes Somos</div>
                </a>
                <a className="img-container" href="/contacto">
                    <img className="menu-img" src={require("../css/img/menu/7.jpg")}/>
                    <div className="img-link-text contacto">Contacto</div>
                </a>
            </div>
        )
    }
};
