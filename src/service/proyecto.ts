import axios from "axios";

const query: string = "http://localhost:3001"

export function getProyectostodo(){       
    return axios.get(`${query}/proyectos`);    
};


export function postProyecto(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/proyecto`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}
export function getProyectos(id_proyec:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/proyectos`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}
export function putProyecto(id_proyec:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/proyecto/${id_proyec}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getProyectoBeneficia(id_proyec:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/proyecto/${id_proyec}/beneficiarios`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getProyectoSeguim(id_proyec:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/admin/${id_proyec}/seguimiento`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getProyecto(id_proyec:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/proyecto/${id_proyec}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}
