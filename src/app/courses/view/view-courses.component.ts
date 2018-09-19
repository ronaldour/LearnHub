import { Component, OnInit } from '@angular/core'
import { CoursesService } from '../courses.service';

@Component({
   templateUrl: './view-courses.component.html',
   styleUrls: [ './view-courses.component.css' ]
})

export class ViewCoursesComponent implements OnInit {
   courses : any[]

   constructor(private coursesService : CoursesService) {

   }

   ngOnInit() {
      this.courses = this.coursesService.getCourses()
   }
}