import { Component, OnInit } from '@angular/core'
import { CoursesService } from '../courses.service';
import { ICourse } from '../course.model'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
   templateUrl: './view-courses.component.html',
   styleUrls: [ './view-courses.component.css' ]
})

export class ViewCoursesComponent implements OnInit {
   courses : ICourse[]

   constructor(private coursesService : CoursesService, private spinner: NgxSpinnerService) {

   }

   ngOnInit() {
      this.fetchCourses()
   }

   private fetchCourses() {
      this.spinner.show()
      this.coursesService.getCourses().then(courses => {
         this.spinner.hide()
         this.courses = courses
      })
   }

   onDeleted(deleted : boolean){
      if(deleted) {
         this.fetchCourses()
      }
   }
}