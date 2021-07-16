import React, { useEffect, useRef } from 'react';

const Clinicas = () => {
    const top = useRef();
    const scrollTop = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    useEffect(() => { scrollTop(top); }, [top]);
    return (
        <div className="text-center" ref={top}>
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