
import React,{useState,useEffect} from "react";
import {IBeneficiario} from "../interfaces/beneficiario"
import {getBeneficiario, postBeneficiario, putBeneficiario} from "../services/beneficiario";
import {useParams, Redirect} from "react-router-dom";
import Modal from "./modal";
import Subheader from "./Subheader"
import useFormHelper from "../helpers/useFormHelper";


const Benefi: React.FC = () => {

    const [beneficiario,setBeneficiario] = useState(true);
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

      function saveBeneficiario(){

        if(!completed){
          setSubmitting(true);
          setMessage("Sending...");
  
          if(id){
            putBeneficiario(id,values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Beneficiario updated with success");          
              }else{
                setMessage("Beneficiario name already exist");
              }
            })
          }else{
            postBeneficiario(values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Beneficiario saved with success");          
              }else{
                setMessage("Beneficiario name already exist");
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
      identidad: "",
      nombre: "",
      edad: "",
      ocupacion: "",
      direccion: "",
      telefono: ""

    });      

    const {
      values,      
      handleChange,
      updateValues      
    } = useFormHelper(states);

    useEffect(()=>{
      if(id && cleanUp){
        setCleanUp(false);
        getBeneficiario(id).then(value=>{
          updateValues({
            identidad: value.data.identidad,
            nombre: value.data.nombre,
            edad: value.data.edad,
            ocupacion: value.data.ocupacion,
            direccion: value.data.direccion,
            telefono: value.data.telefono
          });          
        })
      }
    },[id,updateValues,cleanUp])

    useEffect(()=>{
        if(update){
            getBeneficiario(id).then(r=>{                
                setUpdate(false);
                setBeneficiario(r.data);
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
                accept={saveBeneficiario}
                submitting={submitting}
                completed={completed}
            />
        <Subheader title="Benefi del Beneficiario"/>
        <div className=" container justify-content-center form-group col-md-18">
                    <form className="col-md-10">
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">Nombre</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} name="nombre" 
                            placeholder="nombre del Beneficiario"
                          />
                        </div>
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">Numero Identidad</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} 
                            name="identidad" 
                            placeholder="numero de Beneficiario"
                            />
                        </div>
                        <div className="form-group">
                          <label htmlFor="formGroupExampleInput2">Edad</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            onChange={handleChange} 
                            name="edad" 
                            placeholder="edad"
                           />
                        </div>
                        <div className="form-group">
                          <label htmlFor="formGroupExampleInput2">Ocupacion</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            onChange={handleChange} 
                            name="ocupacion" 
                            placeholder="ocupacion"
                           />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Direccion</label>
                            <input type="text" 
                                className="form-control" 
                                id="formGroupExampleInput2" 
                                onChange={handleChange} 
                                name="direccion" 
                                placeholder="Direccion"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Telefono</label>
                            <input type="text" 
                                className="form-control" 
                                id="formGroupExampleInput2" 
                                onChange={handleChange} 
                                name="telefono" 
                                placeholder="Telefono"
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
export default Benefi;