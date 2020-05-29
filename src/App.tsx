import React from 'react';
import './css/style.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./view/home"
import IniciarSeccion from "./view/Login"
import Admin from "./view/administrador"
import PerfilAd from "./view/perfil"
import Tabla from "./view/tableProyect"
import ProyecAd from "./view/proyecto"
import InterventorAd from "./view/interventor"
import ZonaAd from "./view/zona"
import Interven from "./view/interventorprin"
import Nuevobenefi from "./view/nuevoBenefi"
import PerfilinterAd from "./view/perfilinter"
import SeguimientoAd from "./view/seguimiento"

const App: React.FC = () => (
  <BrowserRouter>
      <Switch>
      <Route path="/Lideresparalvidapaz" exact component={Home}/>
      <Route path="/Lideresparalvidapaz/admin" exact component={IniciarSeccion}/>
      <Route path="/Lideresparalvidapaz/inter" exact component={IniciarSeccion}/>
      <Route path="/id_admin" exact component={Admin}/>
      <Route path="/admin/id_admin" exact component={PerfilAd}/>
      <Route path="/admin/id_admin/proyectos" exact component={Tabla}/>
      <Route path="/proyecto" exact component={ProyecAd}/>
      <Route path="/admin/id_admin/interventor" exact component={InterventorAd}/>
      <Route path="/admin/id_admin/zona" exact component={ZonaAd}/>
      <Route path="/id_inter" exact component={Interven}/>
      <Route path="/inter/id_inter/beneficiario" exact component={Nuevobenefi}/>
      <Route path="/inter/id_inter" exact component={PerfilinterAd}/>
      <Route path="/inter/id_inter/seguimiento" exact component={PerfilinterAd}/>
      </Switch>
  </BrowserRouter>
  
);

export default App;
