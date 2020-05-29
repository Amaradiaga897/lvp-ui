import React,{useState,useEffect} from "react";
import {IEtapa} from "../interfaces/seguimiento"
import {getSeguimiento, postSeguimiento, putSeguimiento} from "../services/seguimiento";
import {useParams, Redirect} from "react-router-dom";
import Modal from "./modal";
import Subheader from "./Subheader"
import useFormHelper from "../helpers/useFormHelper";


const Seguimiento : React.FC = () => {

    const [Seguimiento,setSeguimiento] = useState(true);
    const [cleanUp,setCleanUp] = useState(true);

     /* MODAL */
     const [showmodal,setShowmodal] = useState(false);
     const [submitting,setSubmitting] = useState(false);
     const [message,setMessage] = useState("Do you want to save?");
     const [completed,setCompleted] = useState(false);
     const [update,setUpdate] = useState(true);

     function hideModal(){
        setShowmodal(false);
      }
  
      function showModal(){
        setShowmodal(true);
      }  

      function saveSeguimiento(){

        if(!completed){
          setSubmitting(true);
          setMessage("Sending...");
  
          if(id){
            putSeguimiento(id,values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Seguimiento updated with success");          
              }else{
                setMessage("Seguimiento name already exist");
              }
            })
          }else{
            postSeguimiento(values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Seguimiento saved with success");          
              }else{
                setMessage("Seguimiento name already exist");
              }
            })
          }
        }else{
          setCompleted(false);
          setMessage("Do you want to save?");
          hideModal();
        }
        
      }

      ////////////////
      const {id} = useParams();
     
    const states = useState({
      id_proyect: "",
      etapa: "",
      asistencia: ""

    });      

    const {
      values,      
      handleChange,
      updateValues      
    } = useFormHelper(states);

    useEffect(()=>{
      if(id && cleanUp){
        setCleanUp(false);
        getSeguimiento(id).then(value=>{
          updateValues({
            id_proyect: value.data.id_proyect,
            etapa: value.data.etapa,
            asistencia: value.data.asistencia
          });          
        })
      }
    },[id,updateValues,cleanUp])

    useEffect(()=>{
        if(update){
            getSeguimiento(id).then(r=>{                
                setUpdate(false);
                setSeguimiento(r.data);
            });
        }
                
    },[update]);

    useEffect(() => {
      return () => {
        console.log("cleaned up");
      };
    }, []);
  


    return(
        <div className="center">
            <Modal
                title="Confirmation"
                description={message}
                lbl_main_btn="Ok"
                lbl_snd_btn="No"
                show={showmodal}
                closeModal={hideModal}
                accept={saveSeguimiento}
                submitting={submitting}
                completed={completed}
            />
        <Subheader title="Nueva Seguimiento"/>
        <div className=" container justify-content-center form-group col-md-18">
                    <form>
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">id del proyecto</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} 
                            name="id_proyect" 
                            placeholder="id del proyecto"
                          />
                        </div>
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">Etapa</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} 
                            name="etapa" 
                            placeholder="etapa del proyecto"
                            />
                        </div>
                        <div className="form-group">
                          <label htmlFor="formGroupExampleInput2">Asistencia</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            onChange={handleChange} 
                            name="asistencia" 
                            placeholder="asistencia"
                           />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary col-md-12" onClick={showModal}>Aceptar</button>
                        </div>
                    </form>
                </div>

    </div>

 );
}
export default Seguimiento;