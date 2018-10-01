import { Injectable } from '@angular/core'
import { ICourse } from './course.model'

@Injectable()
export class CoursesService {

   constructor() {
      if(!localStorage.getItem('courses')) {
         localStorage.setItem('courses', JSON.stringify(Courses))
      }
   }

   getCourses() {
      return JSON.parse(localStorage.getItem('courses'))
   }

   addCourse(course : ICourse) {
      let courses = JSON.parse(localStorage.getItem('courses'))
      courses.push(course)
      localStorage.setItem('courses', JSON.stringify(courses))
   }


}

const Courses : ICourse[] = [
   {
      id: 1,
      name: 'PHP for dummies',
      mentor: 'Geovanny Lopez',
      price: 1.99,
      imageUrl: '/assets/php.png',
      releaseDate: new Date('05/06/2018'),
      level: 'beginer'
   },
   {
      id: 2,
      name: 'Advanced C++',
      mentor: 'Ronaldo U',
      price: 99.98,
      imageUrl: '/assets/cpp.png',
      releaseDate: new Date('05/10/2018'),
      level: 'advanced'
   },
   {
      id: 3,
      name: 'Assembler',
      mentor: 'Martin P',
      price: 85.99,
      imageUrl: '/assets/asm.png',
      releaseDate: new Date('07/07/1999'),
      level: 'advanced'
   },
   {
      id: 4,
      name: 'Angular Tour',
      mentor: 'Juanito',
      price: 50.50,
      imageUrl: '/assets/angular.png',
      releaseDate: new Date('06/06/2018'),
      level: 'intermediate'
   },
   {
      id: 5,
      name: 'Master React',
      mentor: 'Paolo',
      price: 50.50,
      imageUrl: '/assets/react.png',
      releaseDate: new Date('06/06/2018'),
      level: 'intermediate'
   }
]