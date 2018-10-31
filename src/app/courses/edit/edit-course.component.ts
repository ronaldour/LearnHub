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
  courseId : string

  constructor(private coursesService : CoursesService, private router : Router, private activatedRoute : ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id']
    })

    this.name = new FormControl('', Validators.required)
    this.mentor = new FormControl('', Validators.required)
    this.price = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)

    this.editCourseForm = new FormGroup({
      name: this.name,
      mentor: this.mentor,
      price: this.price,
      level: this.level
    })
    
    this.coursesService.getCourse(this.courseId).then(course => {
      this.course = course

      this.name.setValue(this.course.name)
      this.mentor.setValue(this.course.mentor)
      this.price.setValue(this.course.price)
      this.level.setValue(this.course.level)
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  saveCourse(formValues) {
    let course : ICourse = {
      _id: this.course._id,
      name: formValues.name,
      mentor: formValues.mentor,
      price: +formValues.price,
      level: formValues.level,
      releaseDate: this.course.releaseDate,
      imageUrl: this.course.imageUrl
    }

    this.coursesService.editCourse(course).then(updated => {
      //If updated { updated correctly }
      this.router.navigate(['courses'])
    })
  }

  cancel() {
    this.router.navigate(['courses'])
  }
}
