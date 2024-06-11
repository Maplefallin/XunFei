import { setCookie,getCookie } from "typescript-cookie"


const setToken=(token:string)=>{
    setCookie("token",token)
}


const getToken=()=>{
    return getCookie("token")||''
}

export {
    getToken,setToken
}