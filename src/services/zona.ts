import axios from "axios";

const query: string = "http://localhost:3001"

export function getZonas(){       
    return axios.get(`${query}/zona`);    
};

export function postZona(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/zona`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putZona(id_zona:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/zona/${id_zona}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}



export function getZona(id_zona:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/zona/${id_zona}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

