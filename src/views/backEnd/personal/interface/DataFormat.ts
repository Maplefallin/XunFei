interface CourseTime{
    beginTime:string ,
    endTime:string ,
    duration:string 
}

interface CourseInfo{
    id:number,
    name: string ,
    time: CourseTime ,
    location: string,
}