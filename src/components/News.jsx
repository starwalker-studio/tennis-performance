import React, { useEffect, useRef, useState } from 'react';
import newsOne from '../news/1.png';
import winners from '../news/acapulco-1.png';
import germanFlag from '../news/german-flag.png';
import NoticeOne from './NoticeOne';
import NoticeTwo from './NoticeTwo';
import NoticeThree from './NoticeThree';
import * as environment from '../environment';

const News = (props) => {
    const [modeView, setModeView] = useState(props.location.state.view);
    const [notice, setNotice] = useState(props.location.state.notice);
    const [buttonNotice, setButtonNotice] = useState(props.location.state.button);
    const top = useRef();
    const scrollTop = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    useEffect(() => { scrollTop(top); }, [top]);
    return (
        <div>
            <div className="container p-4 mt-4" ref={top}>
                <h2>Noticias</h2>
                <hr />
                <div>
                    {
                        !modeView ? (
                            <div className="p-3 mb-5">
                                <div className="d-flex media mt-5 border p-3">
                                    <img src={newsOne} className="img-news-index align-self-center mr-3 img-fluid" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0">{environment.INDEX_NEWS_TITLE}</h5>
                                        <p>{environment.INDEX_NEWS_CONTENT}</p>
                                        <p className="mb-0">{environment.INDEX_NEWS_CONTENT_BOTTOM}</p>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2">
                                    <button className="btn btn-dark"
                                        onClick={() => {
                                            setModeView(true);
                                            setNotice(1);
                                            setButtonNotice(true);
                                            scrollTop(top);
                                        }}>
                                        Leer más
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" className="bi bi-file-text ml-2" viewBox="0 0 16 17">
                                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                        </svg></button>
                                </div>
                                <div className="d-flex media mt-5 border p-3">
                                    <img src={germanFlag} className="img-news-index align-self-center mr-3 img-fluid" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0">{environment.INDEX_NEWS_TITLE_TWO}</h5>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2">
                                    <button className="btn btn-dark"
                                        onClick={() => {
                                            setModeView(true);
                                            setNotice(2);
                                            setButtonNotice(true);
                                            scrollTop(top);
                                        }}>
                                        Leer más
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" className="bi bi-file-text ml-2" viewBox="0 0 16 17">
                                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                        </svg></button>
                                </div>
                                <div className="d-flex media mt-5 border p-3">
                                    <img src={winners} className="img-news-index align-self-center mr-3 img-fluid" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0">{environment.INDEX_NEWS_TITLE_THREE}</h5>
                                        <p>{environment.INDEX_NEWS_CONTENT_THREE}</p>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2">
                                    <button className="btn btn-dark"
                                        onClick={() => {
                                            setModeView(true);
                                            setNotice(3);
                                            setButtonNotice(true);
                                            scrollTop(top);
                                        }}>
                                        Leer más
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" className="bi bi-file-text ml-2" viewBox="0 0 16 17">
                                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                        </svg></button>
                                </div>
                            </div>
                        ) : (
                                <div>
                                    {
                                        notice === 1 && (
                                            <NoticeOne />
                                        )
                                    }
                                    {
                                        notice === 2 && (
                                            <NoticeTwo />
                                        )
                                    }
                                    {
                                        notice === 3 && (
                                            <NoticeThree />
                                        )
                                    }
                                </div>
                            )
                    }
                </div>
                <hr />
                <div>
                    {
                        buttonNotice && (
                            <div className="row justify-content-center text-center p-5">
                                <button className="btn btn-dark btn-lg"
                                    onClick={() => {
                                        setModeView(false);
                                        setButtonNotice(false);
                                    }}>
                                    Más Noticias
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-text ml-2" viewBox="0 0 16 17">
                                        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                    </svg></button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default News;
