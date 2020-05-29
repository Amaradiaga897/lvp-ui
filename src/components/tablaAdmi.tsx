import React,{useState,useEffect} from "react";
import {Redirect} from "react-router-dom"

import {getProyectos} from "../services/proyecto";
import Modal from "./modal";
import {} from "../interfaces/proyecto"

const Table: React.FC = () => {

    const [proyecto,setProyecto] = useState([]);
    const [updatedProyectos,setUpdatedProyectos] = useState(false);
    const [Id_proyec,setId_proyec] = useState("");
    const [redirectNow,setRedirectNow] = useState(false);

    /* MODAL */
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Do you want to delete?");
    const [completed,setCompleted] = useState(false);
     
    function redirectTo(event:any){
        setProyecto(event.target.id);
        setRedirectNow(true)
    }

    function hideModal(){
        setShowmodal(false);
    }

    function showModal(event:any){
        console.log(event.target);
        setProyecto(event.target.id);
        setShowmodal(true);
    }      

    function drop(){

      if(!completed){

        setSubmitting(true);
        setMessage("Sending...");

       /* deleteCategory(categoryId).then(value=>{
            
            setCompleted(true);
            setSubmitting(false);
            if(value.successed){
                setMessage("Category deleted successfuly!");
            }else{
                setMessage("This category has languages linked, drop these ones before drop this!");
            }
        });*/

      }else{
        setUpdatedProyectos(false);
        setCompleted(false);
        setMessage("Do you want to delete?");
        hideModal();
      }
      
    }

    /*********************** */



    useEffect(()=>{        
        if(!updatedProyectos){
            getProyectos(Id_proyec).then(r=>{                
                setProyecto(r);
                setUpdatedProyectos(true);               
            });            
        } 
    },[updatedProyectos]);

    return(

        <div>
            <Modal
                title="Confirmation"
                description={message}
                lbl_main_btn="Ok"
                lbl_snd_btn="No"
                show={showmodal}
                closeModal={hideModal}
                accept={drop}
                submitting={submitting}
                completed={completed}
            />

            <table className="table center">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Zona</th>
                        <th scope="col">Interventor</th>
                        <th scope="col"></th>
                        <th scope="col"></th>                
                    </tr>
                </thead>
                <tbody>
                    { proyecto.map((data:any)=>(
                        <tr key={data._id} >
                            <th scope="row">{data._id}</th>
                            <td>{data.zona}</td>
                            <td>{data.interventor}</td>
                        </tr>
                    ))}
                                    
                </tbody>
            </table>
        </div>

       
        
    );
}

export default Table;