import { Routes } from '@angular/router'
import { CreateCourseComponent } from './create/create-course.component';
import { ViewCoursesComponent } from './view/view-courses.component';
import { EditCourseComponent } from './edit/edit-course.component';

export const CoursesRoutes : Routes = [
   { path: 'create', component: CreateCourseComponent },
   { path: 'edit/:id', component: EditCourseComponent },
   { path: '', component: ViewCoursesComponent }
]