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
