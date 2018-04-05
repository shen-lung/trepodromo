import React, {Component} from 'react';
import '../css/Trepodromo.css';
import '../bootstrap4/css/bootstrap.css';

export default class BasePage extends Component {
    render() {
        return (
            <div className="header">
                <section  className="container-fluid d-flex justify-content-center cover">
                    <div className="content-center"></div>
                </section>
                <nav className="navbar navbar-expand-md navbar-expand-lg d-none d-md-block">
                    <ul className="navbar-nav mr-auto center">
                      <li className="nav-item">
                        <a className="menu-link home" href="/"></a>
                      </li>
                      <li className="nav-item">
                        <a className="menu-link escalada" href="/escalada">Escalada</a>
                      </li>
                      <li className="nav-item">
                        <a className="menu-link clases" href="/clases">Clases</a>
                      </li>
                      <li className="nav-item">
                        <a className="menu-link cursos" href="/cursos">Cursos</a>
                      </li>
                      <li className="nav-item">
                        <a className="menu-link eventos" href="/eventos">Eventos</a>
                      </li>
                      <li className="nav-item">
                        <a className="menu-link fotos" href="/fotos">Fotos</a>
                      </li>
                      <li className="nav-item">
                        <a className="menu-link quienes_somos" href="/quienes_somos">Quienes Somos</a>
                      </li>
                      <li className="nav-item">
                        <a className="menu-link contacto" href="/contacto">Contacto</a>
                      </li>
                      <li className="nav-item">
                        <a className="menu-link fb" href="https://www.facebook.com/trepodromo.mdz/"></a>
                      </li>
                    </ul>
                </nav>
            </div>
        )
    }
};
