import React,{useState,useEffect} from "react";
import {IZona} from "../interfaces/zona"
import {getZona, postZona, putZona} from "../services/zona";
import {useParams, Redirect} from "react-router-dom";
import Modal from "./modal";
import Subheader from "./Subheader"
import useFormHelper from "../helpers/useFormHelper";


const Zona : React.FC = () => {

    const [Zona,setZona] = useState(true);
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

      function saveZona(){

        if(!completed){
          setSubmitting(true);
          setMessage("Sending...");
  
          if(id){
            putZona(id,values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Zona updated with success");          
              }else{
                setMessage("Zona name already exist");
              }
            })
          }else{
            postZona(values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Zona saved with success");          
              }else{
                setMessage("Zona name already exist");
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
      departamento: "",
      sede: "",
      zona: ""

    });      

    const {
      values,      
      handleChange,
      updateValues      
    } = useFormHelper(states);

    useEffect(()=>{
      if(id && cleanUp){
        setCleanUp(false);
        getZona(id).then(value=>{
          updateValues({
            departamento: value.data.departamento,
            sede: value.data.sede,
            zona: value.data.zona
          });          
        })
      }
    },[id,updateValues,cleanUp])

    useEffect(()=>{
        if(update){
            getZona(id).then(r=>{                
                setUpdate(false);
                setZona(r.data);
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
                accept={saveZona}
                submitting={submitting}
                completed={completed}
            />
        <Subheader title="Nueva Zona"/>
        <div className=" container justify-content-center form-group col-md-18">
                    <form>
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">Departamento</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} 
                            name="departamento" 
                            placeholder="nombre del departamento"
                          />
                        </div>
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">Sede</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} 
                            name="sede" 
                            placeholder="nombre de la sede"
                            />
                        </div>
                        <div className="form-group">
                          <label htmlFor="formGroupExampleInput2">Zona</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            onChange={handleChange} 
                            name="zona" 
                            placeholder="nombre de la zona"
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
export default Zona;