import { defineStore } from "pinia"
import {ref,computed} from "vue"
import { getToken } from "@/root/auth"

const userStore=defineStore("user",()=>{
    const _authToken=ref<string>()

    const token=computed(()=>{
        return _authToken.value||getToken()||"nuist"
    })
    return {
        token
    }
    
},
{
    //@ts-ignore
    persist:true
}
)

export default userStore