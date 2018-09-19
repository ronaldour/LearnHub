import { Component, Input } from '@angular/core'

@Component({
   selector: 'course-card',
   templateUrl: './course-card.component.html',
   styles: [`
      .thumbnail { min-height: 210px; }
      .pad-left { margin-left: 10px; }
      .well div { color: #bbb; }
      .event-image { height: 50px; margin-bottom: 10px; }
   `]
})

export class CourseCardComponent {
   @Input() course:any
}