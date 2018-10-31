import { Component, OnInit, OnChanges, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core'
import { CoursesService } from '../courses.service';
import { ICourse } from '../course.model'

@Component({
   templateUrl: './view-courses.component.html',
   styleUrls: [ './view-courses.component.css' ]
})

export class ViewCoursesComponent implements AfterViewInit {
   courses : ICourse[]

   constructor(private coursesService : CoursesService) {

   }

   ngAfterViewInit() {
      this.fetchCourses()
   }

   private fetchCourses() {
      this.coursesService.getCourses().then(courses => {
         this.courses = courses
      })
   }

   onDeleted(deleted : boolean){
      if(deleted) {
         this.fetchCourses()
      }
   }
}