import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoursesRoutes } from './courses.routes';

import { CreateCourseComponent } from './create/create-course.component';
import { ViewCoursesComponent } from './view/view-courses.component';
import { CoursesService } from './courses.service';
import { CourseCardComponent } from './view/course-card.component';

@NgModule({
   declarations: [
      CreateCourseComponent,
      ViewCoursesComponent,
      CourseCardComponent
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(CoursesRoutes)
   ],
   providers: [
      CoursesService
   ]

})

export class CoursesModule {
   
}