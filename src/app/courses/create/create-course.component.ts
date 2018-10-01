import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICourse } from '../course.model'
import { CoursesService } from '../courses.service'
import { Router } from '@angular/router';

@Component({
   templateUrl: './create-course.component.html',
   styleUrls: [ './create-course.component.css' ]
})

export class CreateCourseComponent implements OnInit {
   createCourseForm : FormGroup
   name : FormControl
   mentor : FormControl
   price : FormControl
   level : FormControl

   mouseoverSave

   constructor(private coursesService : CoursesService, private router : Router) {

   }

   ngOnInit() {
      this.name = new FormControl('', Validators.required)
      this.mentor = new FormControl('', Validators.required)
      this.price = new FormControl('', Validators.required)
      this.level = new FormControl('', Validators.required)

      this.createCourseForm = new FormGroup({
         name: this.name,
         mentor: this.mentor,
         price: this.price,
         level: this.level
      })
   }

   saveCourse(formValues) {
      let course : ICourse = {
         id: undefined,
         name: formValues.name,
         mentor: formValues.mentor,
         price: +formValues.price,
         level: formValues.level,
         releaseDate: new Date()
      }

      this.coursesService.addCourse(course)
      this.router.navigate(['courses'])
   }

   cancel() {
      this.router.navigate(['courses'])
   }
}