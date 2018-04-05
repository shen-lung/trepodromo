import React, {Component} from 'react';

import '../css/Trepodromo.css';
import '../bootstrap4/css/bootstrap.css';

export default class MobileFooter extends Component {
    render() {
        return (
            <div className="footer">
                <p className="footer-text">© 2017 Trepodromo. Todos los derechos reservados.
                    <a href="http://www.facebook.com/vadimshenlung" target="_blank">@vadim</a></p>
            </div>
        )
    }
};
