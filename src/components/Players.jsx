import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trnmtInfo } from '../redux/trnmtDucks';
import DataTable from 'react-data-table-component';
import * as environment from '../environment';
// import Pdf from 'react-to-pdf';
import axios from 'axios';

const Players = () => {
    const [info, setInfo] = useState({});
    const dispatch = useDispatch();
    const top = useRef();
    const listRef = useRef();
    const scrollTop = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const players = useSelector(store => store.authPlayerRegister.info);
    const paginationRows = [10, 15, 20];
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
        <div className="container p-4 mt-2" ref={top}>
            <div ref={listRef}>
                <div className="text-center p-3">
                    <h3>Lista de Jugadores</h3>
                </div>
                <div className="d-flex justify-content-center text-center p-3">
                    <div className="col-sm text-right">
                        <p>{`Fecha de torneo: `}<strong>{`${info.fecha}`}</strong></p>
                    </div>
                    <div className="col-sm text-center">
                        <p>{`Horario: `}<strong>{`${info.horario}`}</strong></p>
                    </div>
                    <div className="col-sm text-left">
                        <p>{`Modo de juego: `}<strong>{`${info.juego}`}</strong></p>
                    </div>
                </div>
                <div className="container">
                    <DataTable columns={environment.COLUMNS_DATA_TABLE} data={players}
                        pagination paginationRowsPerPageOptions={paginationRows} />
                </div>
            </div>
            <hr />
            <div className="row justify-content-center p-3 mb-3 mt-2">
                {/* <Pdf targetRef={listRef} filename="jugadores.pdf" scale={0.7}>
                    {({ toPdf }) =>
                        <button className="btn btn-success btn-lg"
                            onClick={toPdf}>Copiar lista a PDF</button>}
                </Pdf> */}
            </div>
            <div className="container-fluid p-4 text-center alert alert-secondary">
                <p className="font-weight-bold text-muted font-italic mt-2">{environment.TABLE_INSTRUCTIONS_ONE}</p>
                <p className="font-weight-bold font-italic text-danger">{environment.TABLE_INSTRUCTIONS_TWO}</p>
            </div>
            <hr />
        </div >
    )
}

export default Players;
