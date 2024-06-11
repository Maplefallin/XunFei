import { instance } from "@/utils/axios/AxiosConfig";
import { type FormState } from '@/views/login/RegisterSetUp/RegisterInterface';
import { ref } from "vue";

export const login = (loginForm: FormState) => {
    // 登录功能
    return instance({
        method: "post",
        url: "user/login",
        data: loginForm
    });
}

export const register = (registerForm: FormState) => {
    // 注册功能
    return instance({
        method: "post",
        url: "user/register",
        data: registerForm
    });
}
