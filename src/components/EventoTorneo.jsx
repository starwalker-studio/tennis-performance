import React from 'react';
import outTrnmt from '../news/torneo.jpeg';
import outTrnmtTwo from '../news/torneo-1.jpeg';
import outTrnmtThree from '../news/torneo-2.jpeg';

const EventoTorneo = () => {
    return (
        <div className="text-center container">
            <div className="justify-content-center mb-2">
                <img src={outTrnmt} className="img-fluid" alt="" />
                <h4 className="font-italic p-3 mt-2 mb-2 text-muted"><strong>-Imagen del evento-</strong></h4>
            </div>
            <div className="justify-content-center mt-2 mb-2">
                <img src={outTrnmtTwo} className="img-fluid" alt="" />
                <h4 className="font-italic p-3 mt-2 mb-2 text-muted"><strong>-Imagen del evento-</strong></h4>
            </div>
            <div className="justify-content-center mt-2 mb-2">
                <img src={outTrnmtThree} className="img-fluid" alt="" />
            </div>
            <hr />
            <div className="row justify-content-center text-center p-5">
                <div className="col mt-3 mb-3">
                    <a href="https://www.myutr.com/clubs/14103">
                        <button className="btn btn-outline-dark btn-lg">Inscripción
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-plus-fill ml-3" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </button>
                    </a>
                </div>
                <div className="col mt-3 mb-3">
                    <a href="https://www.facebook.com/TSDTennisShowdown">
                        <button className="btn btn-outline-dark btn-lg">Sorteo
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-seam ml-3" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            <hr/>
            <div className="text-center p-5">
                <a href="https://www.hotelesroyal.com.mx"><h3>Hotel Royal Pedregal</h3></a>
            </div>
        </div>
    )
}

export default EventoTorneo;
