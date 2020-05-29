import axios from "axios";

const query: string = "http://localhost:3001"

export function getInterventores(){       
    return axios.get(`${query}/interventores`);    
};

export function postInterventor(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/interventor`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putInterventor(id_inter:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/interventor/${id_inter}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}



export function getInterventor(id_inter:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/interventoor/${id_inter}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getInterventorProy(id_inter:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/interventor/${id_inter}/proyectos`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}