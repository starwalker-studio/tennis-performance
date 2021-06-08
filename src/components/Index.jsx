import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/index-style.css';

const Index = () => {

    return (
        <div>
            <div className="index-img-court-one">
                <div className="text-background-one">
                    <h5>Tennis Performance es un centro de desarrollo de jugadores de tenis para todas
                        las edades que aspiran a mejorar su nivel de tenis.</h5>
                    <button className="btn btn-warning mt-3 button-index">Conoce más</button>
                </div>
            </div>
            <div className="index-banner-one">
                <div className="d-flex justify-content-center text-background-two">
                    <div className="col"></div>
                    <div className="col-9">
                        <h5>Contamos con entrenadores profesionales e instalaciones de alto nivel.</h5>
                        <hr />
                        <ul>
                            <p><strong>Coaches certificados y de buen nivel competitivo</strong></p>
                            <p><strong>Estamos siempre actualizados con las tendencias mundiales de instrucción.</strong></p>
                            <p><strong>Clima</strong></p>
                            <p><strong>Seguridad</strong></p>
                            <p><strong>Accesibilidad</strong></p>
                        </ul>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <div className="index-banner-two">
                <div className="d-flex text-background-three">
                    <div className="col"></div>
                    <div className="col-9">
                        <h5><strong>Tu tenis va a mejorar en Tennis Performance</strong></h5>
                        <button className="btn btn-warning mt-3 mb-3 button-index">Conoce más</button>
                    </div>
                </div>
            </div>
            <div className="index-banner-three">
                <div className="text-background-four">
                    <h5>Compite y participa en nuestros torneos</h5>
                    <br />
                    <p>Julio 2021</p>
                    <p>Agosto 2021</p>
                    <button className="btn btn-warning mt-3 button-index">Ver fechas</button>
                </div>
            </div>
            <div className="d-flex justify-content-center index-banner-four">
                <div className="d-flex text-background-five">
                    <div className="col">
                        <h6><strong>Entérate de las noticias de nuestros jugadores</strong></h6>
                        <button className="btn btn-dark mt-3 button-index button-phone">Noticias</button>
                    </div>
                    <div className="col">
                        <h6><strong>Conoce a nuestros amigos visitando nuestra galería</strong></h6>
                        <NavLink to="/gallery">
                            <button className="btn btn-dark mt-3 button-index button-phone">Galería</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
