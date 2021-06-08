import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getParticulares, getGrupales, getTorneos } from '../redux/galleryDucks';
import '../styles/gallery-style.css';
import particular from '../cover/particular.png';
import grupal from '../cover/grupal.png';
import torneo from '../cover/torneo.png';

const Gallery = () => {
    const dispatch = useDispatch();
    const [num, setNum] = useState(1);
    const [render, setRender] = useState(false);
    const img = useSelector(store => store.photos.photo);
    return (
        <div className="container-fluid">
            <div className="text-center p-4">
                <h2>Galería</h2>
            </div>
            <div className="row justify-content-center p-3">
                <div className="card mb-4">
                    <img src={img} alt="" className="card-img-top img-fluid" />
                    <div className="card-body text-center">
                        <h3 className="card-title">Clases Particulares</h3>
                        <hr />
                        <div className="row justify-content-center mt-4 mb-4">
                            <div className="col">
                                <button className="btn btn-outline-secondary button-img">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="25" height="25"
                                        fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-outline-secondary button-img">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="25" height="25"
                                        fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center p-1 mt-3 mb-5">
                <div className="card mr-3 mb-4 card-album-gallery">
                    <img src={particular} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Clases Particulares</h5>
                        <p className="card-text">Da un vistazo a las clases particulares que ofrecemos.</p>
                        <button className="btn btn-secondary"
                            onClick={() => dispatch(getParticulares(num))}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                fill="currentColor" class="bi bi-image mr-2" viewBox="0 1 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                            </svg>Fotos</button>
                    </div>
                </div>
                <div className="card mr-3 mb-4 card-album-gallery">
                    <img src={grupal} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Clases Grupales</h5>
                        <p className="card-text">Para todas las edades intégrate a nuestros grupos.</p>
                        <button className="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                fill="currentColor" class="bi bi-image mr-2" viewBox="0 1 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                            </svg>Fotos</button>
                    </div>
                </div>
                <div className="card mr-3 mb-4 card-album-gallery">
                    <img src={torneo} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Torneos</h5>
                        <p className="card-text">Conoce la trayectoria de nuestros alumnos en nuestros torneos.</p>
                        <button className="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                fill="currentColor" class="bi bi-image mr-2" viewBox="0 1 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                            </svg>Fotos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
