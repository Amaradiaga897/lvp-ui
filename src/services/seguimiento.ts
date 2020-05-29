import axios from "axios";

const query: string = "http://localhost:3001"

export function getSeguimientos(){       
    return axios.get(`${query}/seguimientos`);    
};

export function postSeguimiento(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/seguimiento`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putSeguimiento(id_seguimiento:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/Seguimiento/${id_seguimiento}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}



export function getSeguimiento(id_seguimiento:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/Seguimiento/${id_seguimiento}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}





