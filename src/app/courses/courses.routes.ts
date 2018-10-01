import { Routes } from '@angular/router'
import { CreateCourseComponent } from './create/create-course.component';
import { ViewCoursesComponent } from './view/view-courses.component';

export const CoursesRoutes : Routes = [
   { path: 'create', component: CreateCourseComponent },
   { path: '', component: ViewCoursesComponent }
]