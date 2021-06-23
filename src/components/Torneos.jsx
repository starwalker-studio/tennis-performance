import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { trnmtInfo } from '../redux/trnmtDucks';
import Nodate from './Nodate';
import Register from './Register';
import '../styles/gallery-style.css';
import axios from 'axios';

const Torneos = () => {
    const [info, setInfo] = useState({});
    const dispatch = useDispatch();
    const top = useRef();
    const scrollTop = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    useEffect(() => {
        axios.get('./info.json').then(e => {
           setInfo(e.data);
        });
        scrollTop(top);
        const getTrnmtInfo = () => {
            dispatch(trnmtInfo());
        }
        getTrnmtInfo();
    }, [top, dispatch]);
    return (
        <div className="container p-4 mt-4" ref={top}>
            <div>
                {
                    info.event ? (
                        <Register info={info} />
                    ) : (
                            <Nodate />
                        )
                }
            </div>
        </div>
    )
}

export default Torneos;
