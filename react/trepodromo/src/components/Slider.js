import React, {Component} from 'react';

import '../css/Trepodromo.css';
import '../bootstrap4/css/bootstrap.css';
import '../bootstrap4/js/bootstrap.js';

export default class Slider extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src="../css/img_slider/1.jpg" alt="First slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src="../css/img_slider/2.jpg" alt="Second slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src="../css/img_slider/3.jpg" alt="Third slide"/>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
            </div>
        )
    }
};
