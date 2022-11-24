import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  template:
  `
  <input type="text" [(ngModel)] = "day" />

  <div [ngSwitch]="day">
  
  <li *ngSwitchCase="1">Monday </li>
  <li *ngSwitchCase="2">Tuesday </li>
  <li *ngSwitchCase="3">Wednesday </li>
  <li *ngSwitchCase="4">Thursday </li>
  <li *ngSwitchCase="5">Friday </li>
  <li *ngSwitchCase="6">Saturday </li>
  <li *ngSwitchCase="7">Sunday </li>
  <li *ngSwitchDefault> Enter Valid Day </li>

    
  </div>  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngSwitchApp';
  day: string = "";
}
