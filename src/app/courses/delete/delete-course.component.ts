import { Component, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent {
  @ViewChild('content') private content
  
  closeResult: string;
  id : number
  name: string
  constructor(private modalService: NgbModal, private coursesService: CoursesService, private router : Router) { }

  open(content) {
      this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  openModal(id : number, name : string) {
    this.id = id
    this.name = name
    this.open(this.content)
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
  }

  delete() {
    this.coursesService.deleteCourse(this.id)
    this.modalService.dismissAll()

    window.location.reload();
  }
}
