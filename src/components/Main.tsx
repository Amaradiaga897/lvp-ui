import React from 'react';

const Main: React.FC = () => (
    <section id="hero">
        <div className="container ">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="9.jpeg" alt="First slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Departamento de "Francisco Morazan"</h3>
                                    <p>Actividad creada por los jovenes</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="5.jpeg" alt="Second slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Departamento de "Francisco Morazan"</h3>
                                    <p>Futbolito con la participacion de jovenes que pertenecen a otro proyecto</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="7.jpeg" alt="Third slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Departamento de "Francisco Morazan"</h3>
                                    <p>creacion de un nuevo proyecto</p>
                                </div>
                            </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                            </a>
                        </div>
        </div>
    </section>

);

export default Main;
