import React from 'react';
import NoticeFooter from './NoticeFooter';
import winners from '../news/acapulco-1.png';
import team from '../news/acapulco-2.png';
import playersTable from '../news/acapulco-3.png';
import '../styles/news-style.css';

const NoticeThree = () => {
    return (
        <div>
            <div className="container mt-4">
                <div className="row justify-content-center p-4">
                    <img src={winners} className="img-fluid img-iphone" alt="" />
                </div>
                <div className="mt-3 mb-3">
                    <h4>Morelos gana medalla de Bronce</h4>
                    <hr />
                    <p className="font-italic">Junio 30 del 2021.</p>
                    <br />
                    <p>Jóvenes tenistas de Morelos fueron a representar su estado en los <strong>Juegos Nacionales 2021 </strong>
                        antes llamadas Olimpiadas Juveniles, organizada por la <strong>CONADE</strong>,
                        en donde también se juegan diferentes disciplinas deportivas.</p>
                    <br />
                    <p>Esta competencia tuvo sede en las canchas del Hotel Princess, Hotel Pierre Marqués, Vidanta, y Mundo Imperial en Acapulco Guerrero.</p>
                    <br />
                    <p>Con la victoria de <strong>Alexia Estrada</strong> y <strong>Valeria Aylin García Chávez</strong> en el <strong>Tercer lugar de dobles femenil </strong>
                        obtuvieron sus medallas de Bronce,  representando a su estado Morelos así quedando en la tabla de campeones
                        con Veracruz en el primer lugar y Durango en segundo lugar.</p>
                    <br />
                    <p>Estos Juegos Nacionales 2021 se realizaron del 24 al 30 de junio del 2021 en modalidades singles y dobles.</p>
                    <div className="row justify-content-center p-4 mt-3 mb-3">
                        <img src={playersTable} className="img-fluid img-iphone" alt="" />
                    </div>
                    <br />
                    <h4>Jugadores participantes en la competencia:</h4>
                    <br />
                    <div className="row justify-content-center p-2">
                        <div className="col p-2">
                            <h6>{'14 (f) menores femenil.'}</h6>
                            <ul>
                                <li>Alexia Estrada
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" className="ml-2 bi bi-trophy-fill" viewBox="0 0 16 16">
                                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                                    </svg>
                                </li>
                                <li>Valeria Aylin García Chávez
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" className="ml-2 bi bi-trophy-fill" viewBox="0 0 16 16">
                                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                                    </svg>
                                </li>
                            </ul>
                            <br />
                            <h6>{'16 (f) menores femenil.'}</h6>
                            <ul>
                                <li>Samanta Santiago</li>
                                <li>Lea Valero</li>
                            </ul>
                        </div>
                        <div className="col p-2">
                            <h6>{'14 (v) menores varonil.'}</h6>
                            <ul>
                                <li>Patricio Soria</li>
                                <li>Emiliano Aguilar</li>
                            </ul>
                            <br />
                            <h6>{'16 (v) menores varonil.'}</h6>
                            <ul>
                                <li>Rodrigo Lozano</li>
                                <li>Andrés Hernández</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center p-2">
                        <div className="col p-2">
                            <h6>Capitanes</h6>
                            <ul>
                                <li>Miguel Terán </li>
                                <li>Luis Viruega</li>
                                <li>Quetzali Vázquez</li>
                                <li>Maribel Alcaraz</li>
                            </ul>
                        </div>
                        <div className="col p-2">
                            <h6>Delegado de Morelos</h6>
                            <ul>
                                <li>Alejandro Olaya</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center p-4 mt-3 mb-3">
                        <img src={team} className="img-fluid img-iphone" alt="" />
                    </div>
                    <hr />
                    <div className="container p-4">
                        <div className="ml-4 mr-4">
                            <p className="font-italic">Entrevista a Alexia Estrada medallista de Bronce</p>
                            <div className="justify-content-center text-center p-4 mt-3 mb-3 embed-responsive embed-responsive-16by9">
                                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F106399635009454%2Fvideos%2F1193721074387619%2F&show_text=false&width=560&t=0"
                                    title="facebook-video"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    className="border-0 embed-responsive-item"></iframe>
                            </div>
                            <p className="font-italic">Partido de Dobles Varonil</p>
                            <div className="justify-content-center text-center p-4 mt-3 mb-3 embed-responsive embed-responsive-16by9">
                                <iframe src="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2F106399635009454%2Fvideos%2F168643501953270%2F&show_text=false&width=560&t=0"
                                    title="facebook-video"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    className="border-0 embed-responsive-item"></iframe>
                            </div>
                            <p className="font-italic">Entrevista al Delegado de Morelos Alejandro Olaya</p>
                            <div className="justify-content-center text-center p-4 mt-3 mb-3 embed-responsive embed-responsive-16by9">
                                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F106399635009454%2Fvideos%2F320319036464288%2F&show_text=false&width=560&t=0"
                                    title="facebook-video"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    className="border-0 embed-responsive-item"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <NoticeFooter />
            </div>
        </div>
    )
}

export default NoticeThree;