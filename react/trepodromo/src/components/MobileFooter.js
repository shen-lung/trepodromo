import React, {Component} from 'react';

import '../css/Trepodromo.css';
import '../bootstrap4/css/bootstrap.css';

export default class MobileFooter extends Component {
    render() {
        return (
            <div>
                <div className="footer d-none d-md-block">
                    <p className="footer-text">© 2017 Trepodromo. Todos los derechos reservados.
                        <a href="http://www.facebook.com/vadimshenlung" target="_blank">@vadim</a></p>
                </div>
                <div className="footer footer-mobile d-md-none">
                    <p className="footer-text">MOBILE</p>
                </div>
            </div>
        )
    }
};
