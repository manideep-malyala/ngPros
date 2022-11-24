import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <h1> Welcome to {{ title }}
  <h4> new course launching on December {{ displayMsg(20) }} </h4>
  <h6> reach me at {{ email | uppercase }} </h6>
  <p> 2 angular projects plus 3 react project, total {{ 5 }} projects </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `learnWeb`;
  email = 'learnweb@email.com'


  displayMsg(lDate : number) : number {
    return lDate;
  }
}
