import React from 'react';
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
                    <div className="col p-2 mr-2 ml-2">
                        <h5>Contamos con entrenadores profesionales e instalaciones de alto nivel.</h5>
                        <hr />
                        <ul>
                            <li><strong>Coaches certificados y de buen nivel competitivo</strong></li>
                            <li><strong>Estamos siempre actualizados con las tendencias mundiales de
instrucción.</strong></li>
                            <li><strong>Clima</strong></li>
                            <li><strong>Seguridad</strong></li>
                            <li><strong>Accesibilidad</strong></li>
                        </ul>
                    </div>
                    <div className="col p-2 mr-2 ml-2">
                        <h5>Tenemos grupos de diferentes edades y niveles.</h5>
                        <hr />
                        <ul>
                            <li><strong>Conoce más sobre nuestras clases personales o grupales</strong></li>
                            <li><strong>Entrenamiento competitivo</strong></li>
                            <li><strong>Salud mental y física</strong></li>
                            <li><strong>Integración y trabajo en equipo</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="index-banner-two">
                <div className="text-background-three">
                    <h5>Tu tenis va a mejorar en Tennis Performance</h5>
                    <button className="btn btn-warning mt-3 mb-3 button-index">Conoce más</button>
                </div>
            </div>
            <div className="index-banner-three">
                <div className="text-background-four">
                    <h5>Compite y participa en nuestros torneos</h5>
                    <br/>
                    <p>Julio 2021</p>
                    <p>Agosto 2021</p>
                    <button className="btn btn-warning mt-3 button-index">Ver fechas</button>
                </div>
            </div>
            <div className="d-flex justify-content-center text-background-five">
                <div className="col">
                    <h6>Enterate de las noticias de nuestros jugadores</h6>
                    <button className="btn btn-dark mt-3 button-index">Noticias</button>
                </div>
                <div className="col">
                    <h6>Conoce a nuestros amigos visitando nuestra galería</h6>
                    <button className="btn btn-dark mt-3 button-index">Galería</button>
                </div>
            </div>
        </div>
    )
}

export default Index;
