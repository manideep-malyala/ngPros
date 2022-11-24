import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:   
  `<h2>Courses</h2> <hr>
  <span *ngFor="let crs of courses; let i=index;">
  
  <span *ngIf="i!=0">, </span>

  <span>{{crs}}</span>
  
  </span>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngForApp';

  courses : string[] = ["Docker", "Jenkins", "Ansible", "Kubernetes"];
}
