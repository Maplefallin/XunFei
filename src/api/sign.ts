import { instance } from "@/utils/axios/AxiosConfig";
 

const getSignData =(type:string)=>{
    return instance({
        method:'get',
        url:'/user/getSignData',
        params: { type: type }
    })
}
const searchSignData = (type:string,searchValue: string) => {
    return instance({
      method: "get",
      url: "user/searchSignData",
      params: {
        type: type,
        query: searchValue 
      }
    });
  };
export {getSignData,searchSignData}