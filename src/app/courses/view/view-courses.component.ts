import { Component, OnInit } from '@angular/core'
import { CoursesService } from '../courses.service';
import { ICourse } from '../course.model'

@Component({
   templateUrl: './view-courses.component.html',
   styleUrls: [ './view-courses.component.css' ]
})

export class ViewCoursesComponent implements OnInit {
   courses : ICourse[]

   constructor(private coursesService : CoursesService) {

   }

   ngOnInit() {
      this.courses = this.coursesService.getCourses()
   }
}