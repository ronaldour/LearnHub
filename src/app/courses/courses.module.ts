import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoursesRoutes } from './courses.routes';

import { CreateCourseComponent } from './create/create-course.component';
import { ViewCoursesComponent } from './view/view-courses.component';
import { CoursesService } from './courses.service';
import { CourseCardComponent } from './view/course-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit/edit-course.component';
import { DeleteCourseComponent } from './delete/delete-course.component';

import { NgxSpinnerModule } from 'ngx-spinner'

@NgModule({
   declarations: [
      CreateCourseComponent,
      ViewCoursesComponent,
      CourseCardComponent,
      EditCourseComponent,
      DeleteCourseComponent
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(CoursesRoutes),
      NgxSpinnerModule
   ],
   providers: [
      CoursesService
   ]

})

export class CoursesModule {
   
}