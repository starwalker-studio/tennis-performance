import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getParticulares, getGrupales, getTorneos } from '../redux/galleryDucks';
import '../styles/gallery-style.css';
import particular from '../cover/particular.png';
import grupal from '../cover/grupal.png';
import torneo from '../cover/torneo.png';
import video from '../cover/video.png';
import * as environment from '../environment';

const Gallery = () => {
    const dispatch = useDispatch();
    const [num, setNum] = useState(1);
    const [photos, setPhotos] = useState(false);
    const [youtube, setYoutube] = useState(false);
    const [title, setTitle] = useState('');
    const [solo, setSolo] = useState(false);
    const [group, setGroup] = useState(false);
    const [trnmt, setTrnmt] = useState(false);
    const img = useSelector(store => store.photos.photo);
    const loading = useSelector(store => store.photos.loading);
    const list = useSelector(store => store.photos.list);
    const top = useRef();
    const scrollTop = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    useEffect(() => {
        const getClasesParticulares = () => {dispatch(getParticulares(num))};
        const getClasesGrupales = () => {dispatch(getGrupales(num))};
        const getTorneosPhotos = () => {dispatch(getTorneos(num))};
        solo && getClasesParticulares();
        group && getClasesGrupales();
        trnmt && getTorneosPhotos();
        scrollTop(top);
    }, [num, solo, group, trnmt, top, dispatch]);
    return (
        <div className="container-fluid">
            <div className="row gallery-banner text-center mb-4">
                <div className="container mt-3 mb-3 p-5"><div className="col-sm-8"><h1>{environment.GALLERY_HEADER}</h1></div></div>
            </div>
            <div ref={top}></div>
            {
                photos && (
                    <div className="row justify-content-center p-3">
                        {
                            loading ? (
                                <div className="ball-padding mb-4">
                                    <div className="col mb-4">
                                        <div className="center-ball">
                                            <div className="balle"></div>
                                            <div className="ombre"></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                    <div className="card mb-4">
                                        <img src={img} alt="" className="card-img-top img-fluid" />
                                        <div className="card-body text-center">
                                            <h3 className="card-title">{title}</h3>
                                            <hr />
                                            <div className="row justify-content-center mt-4 mb-4">
                                                <div className="col">
                                                    {
                                                        num !== 1 && (
                                                            <button className="btn btn-outline-secondary button-img"
                                                                onClick={() => {
                                                                    setNum(num - 1);
                                                                    scrollTop(top);
                                                                }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    width="25" height="25"
                                                                    fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                                    <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                                                </svg>
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                                <div className="col">
                                                    {
                                                        num !== list && (
                                                            <button className="btn btn-outline-secondary button-img"
                                                                onClick={() => {
                                                                    setNum(num + 1);
                                                                    scrollTop(top);
                                                                }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    width="25" height="25"
                                                                    fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                                </svg>
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                )
            }
            {
                youtube && (
                    <div className="d-flex justify-content-center mb-5">
                        <div className="col-9 card mr-1 ml-1 embed-responsive embed-responsive-16by9 text-center">
                            <iframe title="youtube"
                            className="embed-responsive-item" 
                            src="https://www.youtube.com/embed/bxMElQvq8TY" ></iframe>
                        </div>
                    </div>
                )
            }
            <div className="row justify-content-center p-1 mb-2">
                <div className="card ml-2 mr-2 mb-4 card-album-gallery">
                    <img src={particular} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{environment.GALLERY_PARTICULAR_TITLE}</h5>
                        <p className="card-text">{environment.GALLERY_PARTICULAR_CONTENT}</p>
                        <button className="btn btn-secondary"
                            onClick={() => {
                                dispatch(getParticulares(num));
                                setPhotos(true);
                                setTitle('Clases Particulares');
                                youtube && (setYoutube(false));
                                setSolo(true);
                                setGroup(false);
                                setTrnmt(false);
                                setNum(1);
                                scrollTop(top);
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                fill="currentColor" className="bi bi-image mr-2" viewBox="0 1 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                            </svg>{environment.GALLERY_BUTTON_IMG}</button>
                    </div>
                </div>
                <div className="card ml-2 mr-2 mb-4 card-album-gallery">
                    <img src={grupal} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{environment.GALLERY_GROUP_TITLE}</h5>
                        <p className="card-text">{environment.GALLERY_GROUP_CONTENT}</p>
                        <button className="btn btn-secondary"
                            onClick={() => {
                                dispatch(getGrupales(num));
                                setPhotos(true);
                                setTitle('Clases Grupales');
                                youtube && (setYoutube(false));
                                setSolo(false);
                                setGroup(true);
                                setTrnmt(false);
                                setNum(1);
                                scrollTop(top);
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                fill="currentColor" className="bi bi-image mr-2" viewBox="0 1 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                            </svg>{environment.GALLERY_BUTTON_IMG}</button>
                    </div>
                </div>
                <div className="card ml-2 mr-2 mb-4 card-album-gallery">
                    <img src={torneo} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{environment.GALLERY_TRNMT_TITLE}</h5>
                        <p className="card-text">{environment.GALLERY_TRNMT_CONTENT}</p>
                        <button className="btn btn-secondary"
                            onClick={() => {
                                dispatch(getTorneos(num));
                                setPhotos(true);
                                setTitle('Torneos');
                                youtube && (setYoutube(false));
                                setSolo(false);
                                setGroup(false);
                                setTrnmt(true);
                                setNum(1);
                                scrollTop(top);
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                fill="currentColor" className="bi bi-image mr-2" viewBox="0 1 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                            </svg>{environment.GALLERY_BUTTON_IMG}</button>
                    </div>
                </div>
                <div className="card ml-2 mr-2 mb-4 card-album-gallery">
                    <img src={video} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{environment.GALLERY_VIDEO_TITLE}</h5>
                        <p className="card-text">{environment.GALLERY_VIDEO_CONTENT}</p>
                        <button className="btn btn-danger"
                            onClick={() => {
                                dispatch(getTorneos(num));
                                setYoutube(true);
                                setTitle('Torneos');
                                photos && (setPhotos(false));
                                setSolo(false);
                                setGroup(false);
                                setTrnmt(false);
                                scrollTop(top);
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" fill="currentColor"
                                className="bi bi-youtube mr-2" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>{environment.GALLERY_BUTTON_VIDEO}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
