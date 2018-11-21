import { Injectable } from '@angular/core'
import { ICourse } from './course.model'

import { AppConfigService } from '../config.service';

@Injectable()
export class CoursesService {

   readonly coursesAPI : string

   constructor(private environment : AppConfigService) {
      this.coursesAPI = environment.config.backendAPI
   }

   async getCourses() : Promise<ICourse[]>{
      return await fetch(this.coursesAPI, {
            method: 'GET',
            headers: {
               'Cache-Control': 'no-cache'
            }
         }).then(response => {
            if(!!response){
               return response.json()
            }
            else {
               return false
            }
         })
   }

   async getCourse(id : string) : Promise<ICourse>{
      return await fetch(this.coursesAPI + '/' + id, {
         method: 'GET',
         headers: {
            'Cache-Control': 'no-cache'
         }
      }).then(response => {
         if(!!response){
            return response.json()
         }
         else {
            return false
         }
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
         if(!!response){
            return response.ok
         }
         else {
            return false
         }
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
         if(!!response){
            return response.ok
         }
         else {
            return false
         }
      })
   }

   async deleteCourse(id: string) {
      return await fetch(this.coursesAPI + '/' + id, {
         method: 'DELETE',
         headers: {
            'Cache-Control': 'no-cache'
         }
      }).then(response => {
         if(!!response){
            return response.ok
         }
         else {
            return false
         }
      })
   }
}