import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import IndexNews from './IndexNews';
import '../styles/index-style.css';
import * as environment from '../environment';

const Index = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="container-fluid">
            <div className="row index-one">
                <div className="col-sm container mt-5 mb-5 ml-4">
                    <h3 className="mt-4">{environment.INDEX_HEADER}</h3>
                    <NavLink to="/clinicas">
                        <button className="btn btn-outline-warning btn-lg mt-3 button-index">Conoce más</button>
                    </NavLink>
                </div>
                <div className="col-sm-4"></div>
            </div>
            <div className="row justify-content-center index-two">
                <div className="col-sm">
                    <div className="text-center">
                        <div className="card-body">
                            <h4 className="card-title">{environment.INDEX_BANNER_ONE}</h4>
                            <hr />
                            {environment.INDEX_BANNER_LIST.map((e) => (<p key={e}>{e}</p>))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5 mb-3">
                <h2>Noticias</h2>
                <IndexNews />
            </div>
            <div className="row justify-content-center index-three">
                <div className="col-sm"></div>
                <div className="col-sm">
                    <h4>{environment.INDEX_GALLERY}</h4>
                    <NavLink to="/galeria">
                        <button className="btn btn-success btn-lg mt-3 button-index">
                            Galería<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-images ml-2" viewBox="0 0 16 19">
                                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                            </svg>
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="row justify-content-center index-four p-5">
                <div className="col-sm p-1 mt-4 mb-4">
                    <h4>{environment.INDEX_TMNT}</h4>
                    <NavLink to="/torneos">
                        <button className="btn btn-warning btn-lg mt-2 button-index">
                            Ver fechas<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar3 ml-2" viewBox="0 0 16 19">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                        </button>
                    </NavLink>
                </div>
                <div className="col-sm p-1 ml-4">
                </div>
            </div>
            <div className="container-fluid justify-content-center text-center p-5">
                <div className="row">
                    <div className="col-sm">
                        <h4>Ubicación</h4>
                        <p>{environment.INDEX_ADDRESS}</p>
                        <div id="map-container-google-2">
                            <iframe title="ubicacion"
                                className="embed-responsive-item google-map-style"
                                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3774.3677410404293!2d-98.9468383001326!3d18.91511007436098!3m2!1i1024!2i768!4f13.1!2m1!1sBoulevard%20Lomas%20de%20Cocoyoc%20No%201%20Bis%2C%20Lomas%20de%20Cocoyoc%2C%2062847%20Oaxtepec%2C%20Mor.!5e0!3m2!1sen!2smx!4v1623779697327!5m2!1sen!2smx"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
