import { Component, Input } from '@angular/core'

@Component({
   selector: 'course-card',
   templateUrl: './course-card.component.html',
   styles: [`
      .thumbnail { min-height: 210px; }
      .pad-left { margin-left: 10px; }
      .event-image { height: 50px;}
      .bg-default {
         background-color: #232323;
      }
      a { color: white}
   `]
})

export class CourseCardComponent {
   @Input() course:any
}