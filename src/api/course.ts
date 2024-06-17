import { instance } from "@/utils/axios/AxiosConfig";
import { ref } from "vue";


export const getDayCourse = (selectedDate:string) => {
    // 按日期获取课程
    return instance({
        method: "get",
        url: "course/getDayCourse",
        params:{
            date:selectedDate
        }
    });
}

//获取已加入的课程信息
// export const getAllCourse = (id:number) =>{
//     return instance({
//         method:"get",
//         url:"course/getAllCourse",
//         params:{
//             id:id
//         }
//     })
// }

//获取已加入的课程信息
export const getUserAllCourse = () =>{
    return instance({
        method:"get",
        url:"course/getAllCourse",
        params:null
    })
}