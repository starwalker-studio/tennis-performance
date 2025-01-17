import React from 'react';
import NoticeFooter from './NoticeFooter';
import newsOne from '../news/1.png';
import newsTwo from '../news/2.png';
import newsThree from '../news/3.png';
import newsFour from '../news/4.png';
import '../styles/news-style.css';

const NoticeOne = () => {
    return (
        <div>
            <div className="container mt-4">
                <div className="row justify-content-center p-4">
                    <img src={newsOne} className="img-fluid img-iphone" alt="" />
                </div>
                <div className="mt-3 mb-3">
                    <h4>Torneo Borbolla</h4>
                    <hr />
                    <p className="font-italic">Junio 13 del 2021.</p>
                    <br />
                    <p>Torneo Inter Club organizado por <strong>Carlos Borbolla</strong>, donde participaron <strong>Jorge y Alejandro Olaya</strong>,
                    en este torneo la modalidad fue de dobles, los partidos de 1 set a 8 juegos.</p>
                    <br />
                    <p><strong>Carlos Borbolla</strong> y demás participantes provenientes del <strong>Club Francés</strong> donde compitieron con nuestros instructores mencionados,
                    este torneo de carácter amistoso comenzó a las 8:30 am donde los jugadores comenzaron con el calentamiento y eliminatorias.</p>
                    <div className="row justify-content-center p-4 mt-3 mb-3">
                        <img src={newsFour} className="img-fluid img-iphone" alt="" />
                    </div>
                    <p>Este torneo tuvo la participación de 17 jugadores y tuvo una duración de 4 a 5 horas.
                            <strong> Jorge Olaya</strong> junto con <strong>Antonio Diez</strong> llegaron a la final.</p>
                    <div className="row justify-content-center p-4 mt-3 mb-3">
                        <img src={newsThree} className="img-fluid img-iphone" alt="" />
                    </div>
                    <p>Torneo situado en las canchas del <strong>Club Lomas de Cocoyoc</strong>, este es el primer torneo organizado por <strong>Carlos Borbolla</strong>.
                    Al finalizar este torneo los participantes tuvieron un evento de festejo que también se hizo en el mismo sitio.
                    </p>
                    <div className="row justify-content-center p-4 mt-3 mb-3">
                        <img src={newsTwo} className="img-fluid img-iphone" alt="" />
                    </div>
                </div>
                <hr />
                <NoticeFooter />
            </div>
        </div>
    )
}

export default NoticeOne;
