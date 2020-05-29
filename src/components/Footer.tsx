import React from 'react';


const Footer: React.FC = () => (
  <footer className="bgDark color">
            <div className="container">
                <img src="logo.png" className="logo" alt="logo"/>
                <ul className="list-inline texto">
                    <li className="list-inline-item footer-menu"><a href="#">Inicio</a></li>
                    <li className="list-inline-item footer-menu"><a href="#">Quienes somos</a></li>
                    <li className="list-inline-item footer-menu"><a href="#">Testimonios</a></li>
                    <li className="list-inline-item footer-menu"><a href="#">contactanos</a></li>
                </ul> 
                <ul className="list-inline">
                <li className="list-inline-item"><a href="#"><img src="instagram.svg" className="img-fluid"/></a></li>
                    <li className="list-inline-item"><a href="#"><img src="twitter.svg" className="img-fluid"/></a></li>
                    <li className="list-inline-item"><a href="#"><img src="youtube.svg" className="img-fluid"/></a></li>
                    <li className="list-inline-item"><a href="#"><img src="facebook.svg" className="img-fluid"/></a></li>
                </ul>
                <small className="texto">Correo: LidresViPaz@gmail.com</small><br/>
                <small className="texto">Tel: 2233-8767</small><br/>
                <small className="texto">©2020 derechos del autor reservados.</small>
            </div>
  </footer>
);

export default Footer;




    