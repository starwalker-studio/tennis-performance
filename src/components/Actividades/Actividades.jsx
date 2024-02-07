import React from 'react';
import { NavLink } from 'react-router-dom';
import * as environment from '../../environment';

const Actividades = () => {
    return (
        <div className="index-summer">
            <div className="container-sm mt-1 mb-1 text-center">
                <h3 className="mt-2"><strong>{environment.SUMMER_HEADER}</strong></h3>
                <h4 className="mt-2"><strong>{environment.SUMMER_HEADER_BOTTOM}</strong></h4>
                <p className='pt-3'><strong>{environment.SUMMER_TEXT}</strong></p>
                <NavLink to="/clinicas">
                    <button className="btn btn-dark btn-lg mt-1 button-index">Conoce más</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Actividades