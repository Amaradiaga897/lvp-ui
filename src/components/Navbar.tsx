import React from 'react';
import {Link} from "react-router-dom";

const Navbar: React.FC = () => (
    <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="logo.png" className="logo" alt="logo"/>
            </a>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#" id="inicio">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" id="Acercade">Quienes somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" id="testimonio">Conocenos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" id="aboutus">Contactanos</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Iniciar sesión
                        </a>
                        <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item " to="/Lideresparalvidapaz/admin">Administrador</Link>
                            <Link className="dropdown-item " to="/Lideresparalvidapaz/innter">Interventor</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
