import React, { useEffect, useRef, useState } from 'react';
import Nodate from './Nodate';
import Register from './Register';
import '../styles/gallery-style.css';
import axios from 'axios';

const Torneos = () => {
    const [info, setInfo] = useState({});    
    const top = useRef();
    const scrollTop = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    useEffect(() => {
        axios.get('./info.json').then(e => {
           setInfo(e.data);
        });
        scrollTop(top);
    }, [top]);
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
