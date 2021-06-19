import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trnmtInfo } from '../redux/trnmtDucks';
import Nodate from './Nodate';
import Register from './Register';
import '../styles/gallery-style.css';

const Torneos = () => {
    const dispatch = useDispatch();
    const top = useRef();
    const scrollTop = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const info = useSelector(store => store.authPlayerRegister.info);
    const loading = useSelector(store => store.authPlayerRegister.loading);
    useEffect(() => {
        scrollTop(top);
        const getTrnmtInfo = () => {
            dispatch(trnmtInfo());
        }
        getTrnmtInfo();
    }, [top, dispatch]);
    return (
        <div className="container p-4 mt-4" ref={top}>
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
                        <div>
                            {
                                info.event ? (
                                    <Register info={info}/>
                                ) : (
                                        <Nodate />
                                    )
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default Torneos;
