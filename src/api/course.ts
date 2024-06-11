import { instance } from "@/utils/axios/AxiosConfig";
import { ref } from "vue";



export const getDayCourse = (selectedDate:string) => {
    // 注册功能
    return instance({
        method: "get",
        url: "course/getDayCourse",
        params:{
            date:selectedDate
        }
    });
}
