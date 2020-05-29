import axios from "axios";

const query: string = "http://localhost:3001"

export function getAdministradores(){       
    return axios.get(`${query}/admins`);    
};

export function postAdministrador(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/admin`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putAdministrador(id_admin:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/admin/${id_admin}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}



export function getAdministrador(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/admin/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}



export function getAdminIn(id_admin:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/admin/${id_admin}/interventores`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getAdminProy(id_admin:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/admin/${id_admin}/proyectos`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}