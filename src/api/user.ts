import {instance} from '@/utils/axios/AxiosConfig'

export const getUsageTime =()=>{
    //请求今日时长接口
    // return instance({
    //     method:'get',
    //     url:'/user/getUsageTime',
    //     data:null
    // })
    return Promise.resolve({
        today: '4 hours 30 minutes',
    });
}

export const getLanguagePreference = () => {
    //请求最近使用语言接口
    // return instance({
    //     method:'get',
    //     url:'/user/getLanPreference',
    //     data:null
    // })

    return Promise.resolve({
        languages: ['JavaScript', 'Python', 'Java', 'C++'],
        usage: [40, 30, 20, 10],
    });
};