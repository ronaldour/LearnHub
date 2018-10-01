import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ICourse } from '../course.model'

@Component({
  selector: 'app-edit',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, OnDestroy{
  editCourseForm : FormGroup
  name : FormControl
  mentor : FormControl
  price : FormControl
  level : FormControl

  mouseoverSave
  course : ICourse
  sub : any
  courseId : number

  constructor(private coursesService : CoursesService, private router : Router, private activatedRoute : ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.courseId = +params['id']
    })
    this.course = this.coursesService.getCourse(this.courseId)

    this.name = new FormControl(this.course.name, Validators.required)
    this.mentor = new FormControl(this.course.mentor, Validators.required)
    this.price = new FormControl(this.course.price, Validators.required)
    this.level = new FormControl(this.course.level, Validators.required)

    this.editCourseForm = new FormGroup({
      name: this.name,
      mentor: this.mentor,
      price: this.price,
      level: this.level
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  saveCourse(formValues) {
    let course : ICourse = {
      id: this.course.id,
      name: formValues.name,
      mentor: formValues.mentor,
      price: +formValues.price,
      level: formValues.level,
      releaseDate: this.course.releaseDate,
      imageUrl: this.course.imageUrl
    }

    this.coursesService.editCourse(course)
    this.router.navigate(['courses'])
  }

  cancel() {
    this.router.navigate(['courses'])
  }
}
