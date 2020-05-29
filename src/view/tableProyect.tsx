import React from "react";

import Subheader from "../components/Subheader";
import Table from "../components/tablaAdmi";

const Tabla: React.FC = () => {
    return(
        <div>
            <Subheader 
                    title="Tabla de Proyectos"                     
            />    

            <div className="container">
                
                <div className="row">
                    <Table/>
                </div>
            </div>
        
        </div>
    );
}

export default Tabla;