import { Injectable } from '@angular/core'
import { ICourse } from './course.model'
import { environment } from 'environments/environment'

@Injectable()
export class CoursesService {

   count : number
   readonly coursesAPI : string

   constructor() {
      this.coursesAPI = environment.courses_api_url
   }

   private findPosition(id : string) : number{
      let courses = JSON.parse(localStorage.getItem('courses'))
      for(let i = 0; i < courses.length; i++) {
         if(courses[i].id == id) {
            return i
         }
      }
      return -1
   }

   async getCourses() : Promise<ICourse[]>{
      return await fetch(this.coursesAPI, {
            method: 'GET',
            headers: {
               'Cache-Control': 'no-cache'
            }
         }).then(response => {
            return response.json()
         })
   }

   async getCourse(id : string) : Promise<ICourse>{
      return await fetch(this.coursesAPI + '/' + id, {
         method: 'GET',
         headers: {
            'Cache-Control': 'no-cache'
         }
      }).then(response => {
         return response.json()
      })
   }

   async addCourse(course : ICourse) : Promise<boolean> {
      return await fetch(this.coursesAPI, {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ course: course })
      }).then(response => {
         return response.ok
      })
   }

   async editCourse(course : ICourse) {
      return await fetch(this.coursesAPI + '/' + course._id, {
         method: 'PUT',
         headers: {
            "Content-Type": "application/json",
            'Cache-Control': 'no-cache'
         },
         body: JSON.stringify({ course: course })
      }).then(response => {
         return response.ok
      })
   }

   async deleteCourse(id: string) {
      return await fetch(this.coursesAPI + '/' + id, {
         method: 'DELETE',
         headers: {
            'Cache-Control': 'no-cache'
         }
      }).then(response => {
         return response.ok
      })
   }


}

const Courses : ICourse[] = [
   {
      _id: "0",
      name: 'PHP for dummies',
      mentor: 'Geovanny Lopez',
      price: 1.99,
      imageUrl: '/assets/php.png',
      releaseDate: new Date('05/06/2018'),
      level: 'beginer'
   },
   {
      _id: "1",
      name: 'Advanced C++',
      mentor: 'Ronaldo U',
      price: 99.98,
      imageUrl: '/assets/cpp.png',
      releaseDate: new Date('05/10/2018'),
      level: 'advanced'
   },
   {
      _id: "2",
      name: 'Assembler',
      mentor: 'Martin P',
      price: 85.99,
      imageUrl: '/assets/asm.png',
      releaseDate: new Date('07/07/1999'),
      level: 'advanced'
   },
   {
      _id: "3",
      name: 'Angular Tour',
      mentor: 'Juanito',
      price: 50.50,
      imageUrl: '/assets/angular.png',
      releaseDate: new Date('06/06/2018'),
      level: 'intermediate'
   },
   {
      _id: "4",
      name: 'Master React',
      mentor: 'Paolo',
      price: 50.50,
      imageUrl: '/assets/react.png',
      releaseDate: new Date('06/06/2018'),
      level: 'intermediate'
   }
]