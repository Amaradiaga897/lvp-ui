import React,{useState,useEffect} from "react";
import {IProyecto} from "../interfaces/proyecto"
import {getProyecto, postProyecto,putProyecto} from "../services/proyecto";
import {useParams, Redirect} from "react-router-dom";
import Modal from "./modal";
import Subheader from "./Subheader"
import useFormHelper from "../helpers/useFormHelper";


const Proyecto: React.FC = () => {

    const [proyecto,setProyecto] = useState(true);
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

      function saveProyecto(){

        if(!completed){
          setSubmitting(true);
          setMessage("Sending...");
  
          if(id){
            putProyecto(id,values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Proyecto updated with success");          
              }else{
                setMessage("Proyecto name already exist");
              }
            })
          }else{
            postProyecto(values).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage("Proyecto updated with successs");          
              }else{
                setMessage("Proyecto name already exist");
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
      id: "",
      zona: "",
      interventor: ""
     

    });      

    const {
      values,      
      handleChange,
      updateValues      
    } = useFormHelper(states);

    useEffect(()=>{
      if(id && cleanUp){
        setCleanUp(false);
        getProyecto(id).then(value=>{
          updateValues({
            id: value.data.id,
            zona: value.data.zona,
            interventor: value.data.interventor
           
          });          
        })
      }
    },[id,updateValues,cleanUp])

    useEffect(()=>{
        if(update){
            getProyecto(id).then(r=>{                
                setUpdate(false);
                setProyecto(r.data);
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
                accept={saveProyecto}
                submitting={submitting}
                completed={completed}
            />
        <Subheader title="Nuevo Proyecto"/>
        <div className=" container">
          <div >
            <div>
                    <form className="col-sm-7">
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">Id</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} name="id" 
                            placeholder="Id del proyecto"
                          />
                        </div>
                        <div className="form-group ">
                          <label htmlFor="formGroupExampleInput">Zona</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            onChange={handleChange} 
                            name="Zona" 
                            placeholder="Zona"
                            />
                        </div>
                        <div className="form-group">
                          <label htmlFor="formGroupExampleInput2">Interventor</label>
                          <input type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            onChange={handleChange} 
                            name="inerventor" 
                            placeholder="Interventor"
                           />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary col-md-12" onClick={showModal}>Aceptar</button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    </div>

 );
}
export default Proyecto;