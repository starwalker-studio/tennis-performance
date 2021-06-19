import React from 'react';
import { NavLink } from 'react-router-dom';
import newsOne from '../news/1.png';
import * as environment from '../environment';

const IndexNews = () => {
    return (
        <div>
            <div className="d-flex media mt-5 border p-3">
                <img src={newsOne} className="img-news-index align-self-center mr-3 img-fluid" alt="" />
                <div className="media-body">
                    <h5 className="mt-0">{environment.INDEX_NEWS_TITLE}</h5>
                    <p>{environment.INDEX_NEWS_CONTENT}</p>
                    <p className="mb-0">{environment.INDEX_NEWS_CONTENT_BOTTOM}</p>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <NavLink to={{ pathname: "/noticias", state: { view: true, notice: 1, button: true } }}>
                    <button className="btn btn-dark">
                        Leer más
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-text ml-2" viewBox="0 0 16 17">
                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                        </svg></button>
                </NavLink>
            </div>
            <div className="d-flex media mt-5 border p-3">
                <div className="media-body">
                    <h5 className="mt-0">{environment.INDEX_NEWS_TITLE_TWO}</h5>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <NavLink to={{ pathname: "/noticias", state: { view: true, notice: 2, button: true } }}>
                    <button className="btn btn-dark">
                        Leer más
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-text ml-2" viewBox="0 0 16 17">
                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                        </svg></button>
                </NavLink>
            </div>
        </div>
    )
}

export default IndexNews;
