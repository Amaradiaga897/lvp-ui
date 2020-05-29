import React,{useState,useEffect} from "react";
import {IAdmi} from "../interfaces/admin"
import {getAdministrador, postAdministrador, putAdministrador} from "../services/administrador";
import {useParams, Redirect} from "react-router-dom";
import Modal from "./modal";
import Subheader from "./Subheader"
import useFormHelper from "../helpers/useFormHelper";


const Perfil: React.FC = () => {

    const [administrador,setAdministrador] = useState(true);
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

      function saveAdmin(){

        if(!completed){
          setSubmitting(true);
          setMessage("Sending...");
  
          if(id){
            putAdministrador(id,values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Administrador updated with success");          
              }else{
                setMessage("Administrador name already exist");
              }
            })
          }else{
            postAdministrador(values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Administrador saved with success");          
              }else{
                setMessage("Administrador name already exist");
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
      password: "",
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
        getAdministrador(id).then(value=>{
          updateValues({
            identidad: value.data.identidad,
            nombre: value.data.nombre,
            password: value.data.password,
            direccion: value.data.direccion,
            telefono: value.data.telefono
          });          
        })
      }
    },[id,updateValues,cleanUp])

    useEffect(()=>{
        if(update){
            getAdministrador(id).then(r=>{                
                setUpdate(false);
                setAdministrador(r.data);
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
                accept={saveAdmin}
                submitting={submitting}
                completed={completed}
            />
        <Subheader title="Perfil del administrador"/>
        <div className=" container justify-content-center form-group col-md-18">
                    <form>
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">Nombre</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} name="nombre" 
                            placeholder="nombre del administrador"
                          />
                        </div>
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">Numero Identidad</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} 
                            name="identidad" 
                            placeholder="numero de administrador"
                            />
                        </div>
                        <div className="form-group">
                          <label htmlFor="formGroupExampleInput2">Contraseña</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            onChange={handleChange} 
                            name="password" 
                            placeholder="Contraseña"
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
export default Perfil;