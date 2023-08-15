import React, { useEffect, useRef } from 'react';
import * as environment from '../environment';

const Clinicas = () => {
    const top = useRef();
    const scrollTop = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    useEffect(() => { scrollTop(top); }, [top]);
    return (
        <div className="text-center" ref={top}>
            <div className="index-summer-info">
                <div className="container-sm mt-1 mb-1 text-center">
                    <h3 className="mt-2"><strong>{environment.SUMMER_HEADER}</strong></h3>
                    <h4 className="mt-2"><strong>{environment.SUMMER_HEADER_BOTTOM}</strong></h4>
                    <p className='pt-3'><strong>{environment.SUMMER_HEADER_INFO}</strong></p>
                    <hr />
                    <br />
                    <h5>Doble sesión diaria 4 horas al día</h5>
                    <p>De 9:30 a 11:30 am y de 3:30 a 5:30 pm</p>
                    <br />
                    <p><strong>$9,900 / Semana de Lunes a Sábado</strong></p>
                    <p>hospedaje, alimentación y entrenamiento</p>
                    <br />
                    <p><strong>$7,500 / Semana de Lunes a Sábado</strong></p>
                    <p>Sólo entrenamiento</p>
                    <br />                    
                    <p>Precio especial para los alumnos <strong>Tennis Performance</strong></p>
                    <br />
                </div>                
            </div>
            <div className="container mt-4">
                <div className="p-3 mt-5 mb-5">
                    <h3>Ofrecemos diversas opciones de clínicas</h3>
                </div>
                <hr />
                <div className="container p-4">
                    <h5>Clínica Infantil y Juvenil</h5>
                    <p>Lunes a Viernes de 4:00 a 6:00 p.m.</p>
                    <p>{'Sábados de 9:00 a 11:00 a.m.'} <strong>{'(Alumnos Avanzados)'}</strong></p>
                    <br />
                    <p>1 vez a la semana <strong>$400 pesos</strong></p>
                    <p>2 veces a la semana <strong>$700 pesos</strong></p>
                    <p>3 o más veces a la semana <strong>$300 pesos por sesión</strong></p>
                    <br />
                    <hr />
                    <br />
                    <h5>Clínica Adultos</h5>
                    <p>Lunes, Miércoles y Viernes de 8:00 a 9:30 a.m.</p>
                    <br />
                    <p><strong>$200 pesos</strong>{' por día (no hay mínimo)'}</p>
                    <br />
                    <hr />
                    <br />
                    <h5>Clases Particulares</h5>
                    <br />
                    <p>Jorge Olaya: <strong>$600 pesos la hora</strong></p>
                    <p>Alejandro Olaya: <strong>$500 pesos la hora</strong></p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Clinicas;