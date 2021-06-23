import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAuth } from '../redux/trnmtDucks';
import * as environment from '../environment';
import '../styles/gallery-style.css';

const Register = ({ info }) => {
    const date = new Date();
    const [fullName, setFullName] = useState('');
    const [countryState, setCountryState] = useState('');
    const [mail, setMail] = useState('');
    const [checkName, setCheckName] = useState(false);
    const [checkState, setCheckState] = useState(false);
    const [submitButton, setSubmitButton] = useState(true);
    const [success, setSuccess] = useState(false);
    const [inputNameStyle, setInputNameStyle] = useState('form-control form-control-lg');
    const [inputStyle, setInputStyle] = useState('form-control form-control-lg');
    const id = useSelector(store => store.authPlayerRegister.regId);
    const top = useRef();
    const scrollTop = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const dispatch = useDispatch();
    const submitData = e => {
        e.preventDefault();
        const data = {
            name: fullName,
            state: countryState,
            mail: mail.toLowerCase(),
            date: date
        }
        dispatch(registerAuth(data));
    }
    useEffect(() => {

        if (fullName.trim()) {
            setInputNameStyle('form-control form-control-lg is-valid');
            setCheckName(true);
        } else {
            setCheckName(false);
        }

        if (countryState.trim()) {
            setInputStyle('form-control form-control-lg is-valid');
            setCheckState(true);
        } else {
            setCheckState(false);
        }

        if (checkName && checkState) {
            setSubmitButton(false);
        } else {
            setSubmitButton(true);
        }

        if (id) {
            setSuccess(true);
            scrollTop(top);
        }


    }, [checkName, checkState, fullName, countryState, id, top]);

    return (
        <div>
            <div className="text-center">
                <h2>{`${environment.REGISTER_HEADER}  ${info.fecha}`}</h2>
            </div >
            <div className="container mt-3">
                <div className="alert alert-info text-center mt-4">
                    {
                        !success && (
                            <h3 className="mt-3">{environment.REGISTER_REQUIRE}</h3>
                        )
                    }
                    <div ref={top}></div>

                    <h5 className="mt-3 mb-3">Costo: <strong>{info.costo}</strong>{environment.REGISTER_PRICE}</h5>
                </div>
                {
                    !success ? (
                        <div>
                            <form onSubmit={submitData}>
                                <div className="container-fluid p-3">
                                    <div className="form-group">
                                        <label>Nombre Completo <span className="text-danger"><strong>*</strong></span></label>
                                        <input type="text"
                                            className={fullName.trim() ? (inputNameStyle) : ('form-control form-control-lg')}
                                            id="nombre" onChange={e => setFullName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>¿De dónde nos visitas? <span className="text-danger"><strong>*</strong></span></label>
                                        <select className={countryState.trim() ? (inputStyle) : ('form-control form-control-lg')}
                                            value={countryState} id="estado"
                                            onChange={e => setCountryState(e.target.value)}>
                                            < option value="" className="text-muted" > Seleccionar</option>
                                            <option value="CDMX">CDMX</option>
                                            <option value="Morelos">Morelos</option>
                                            <option value="Puebla">Puebla</option>
                                            <option value="Edo. de México">Edo. de México</option>
                                        </select>
                                    </div>
                                    <p className="font-weight-light text-muted mt-4"><span className="text-danger">*</span> Campos obligatorios</p>
                                    <hr />
                                    <div className="form-group">
                                        <label>{environment.REGISTER_BUTTON}</label>
                                        <input type="mail" className="text-lowercase form-control form-control-lg"
                                            id="email" onChange={e => setMail(e.target.value.toLowerCase())} />
                                    </div>
                                    <div className="form-group mt-5">
                                    </div>
                                    <button type="submit" className="btn btn-info btn-lg btn-block" disabled={submitButton}>¡Registrar al torneo!</button>
                                    <p className="font-italic font-weight-light text-muted mt-4">Llena los campos obligatorios para habilitar este botón y tu registro será exitoso.</p>
                                </div>
                            </form>
                        </div>
                    ) : (
                            <div className="mt-3" ref={top}>
                                <div className="alert alert-success text-center mt-4 p-4">
                                    <h3>{environment.REGISTER_SUCCESS_HEADER}</h3>
                                    <br />
                                    <p>{environment.REGISTER_SUCCESS_INFO}</p>
                                    <div className="container-fluid justify-content-center text-center p-3">
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
                            </div>
                        )
                }
                <hr />
                <div className="row text-center">
                    <div className="col">
                        <h5 className="mt-4">{environment.REGISTER_SCHEDULE}<strong>{info.horario}</strong></h5>
                    </div>
                    <div className="col">
                        <h5 className="mt-4">{environment.REGISTER_GAME_MODE}<strong>{info.juego}</strong></h5>
                    </div>
                </div>
                <br />
                <div className="p-4 border alert alert-primary">
                    <p><strong>{`${environment.REGISTER_ARRIVAL_HOUR} ${info.llegada} `}</strong></p>
                    <p className="font-italic text-muted">{environment.REGISTER_RECOM_ONE}</p>
                    <p className="font-italic text-muted">{environment.REGISTER_RECOM_TWO}</p>
                </div>
            </div>
        </div >
    )
}

export default Register;
