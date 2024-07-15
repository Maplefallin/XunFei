export interface CourseDataForm{
    id : number;
    name : string;
    teacher_id : number;
    teacher_name : string;
    semester : string;
    cover_image : string;
}

export interface SelectedCoursesType {
    [key: string]: boolean;
  }
    