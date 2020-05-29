import axios from "axios";

const query: string = "http://localhost:3001"

export function getBeneficiarios(){       
    return axios.get(`${query}/beneficiarios`);    
};

export function postBeneficiario(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/beneficiario`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putBeneficiario(id_inter:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/Beneficiario/${id_inter}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteBeneficiarioValid_benefar(id_benef:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/beneficiario/${id_benef}/valid_benefar`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}


export function deleteBeneficiario(id_benef:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/beneficiario/${id_benef}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getBeneficiario(id_benef:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/beneficiario/${id_benef}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });


}

