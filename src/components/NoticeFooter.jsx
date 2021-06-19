import React from 'react';
import { NavLink } from 'react-router-dom';

const NoticeFooter = () => {
    return (
        <div>
            <div className="row justify-content-center container mr-2 ml-2 text-center p-4">
                <div className="col-sm mt-3 mb-3">
                    <h5>Participa en nuestros torneos</h5>
                    <NavLink to="/torneos">
                        <p className="stretched-link">Conoce más</p>
                    </NavLink>
                </div>
                <div className="col-sm mt-3 mb-3">
                    <h5>Entrena con nosotros</h5>
                    <p className="stretched-link">Conoce más</p>
                </div>
            </div>
        </div>
    )
}

export default NoticeFooter;
