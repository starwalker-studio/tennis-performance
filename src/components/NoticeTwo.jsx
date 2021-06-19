import React from 'react';
import NoticeFooter from './NoticeFooter';
import newsFive from '../news/5.jpeg';
import '../styles/news-style.css';

const NoticeTwo = () => {
    return (
        <div>
            <div className="container mt-4">
                <div className="mt-3 mb-3">
                    <div className="row p-4">
                        <div className="col-sm">
                            <h4>Jorge Olaya Jr. Invitado a jugar en Alemania 2021.</h4>
                            <hr />
                            <p className="font-italic">Junio 14 del 2021.</p>
                            <br />
                            <p>Nuestro alumno <strong>Jorge Olaya Jr.</strong>,
                    fue invitado a participar al Interclub en <strong>Alemania.</strong></p>
                            <br />
                            <p>Temporadas de juego que serán en las fechas de finales de Junio del 2021 a Agosto del 2021.</p>
                        </div>
                        <div className="col-sm">
                            <div className="row justify-content-center p-4 mt-3 mb-3">
                                <img src={newsFive} className="img-fluid img-iphone" alt="" />
                            </div>
                            <p className="font-italic">Invitación al torneo.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <NoticeFooter />
            </div>
        </div>
    )
}

export default NoticeTwo;
