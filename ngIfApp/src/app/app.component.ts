import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <div *ngIf="showMsg">
  <h1>Alohmara ! </h1>
  </div>
  <input type="button" value="toggle" (click)=toggle()/>

  
  <div *ngIf="showMsg; then ifBlock else elseBlock"></div>
  <ng-template #ifBlock>Message From If Block.. </ng-template>
  <ng-template #elseBlock>Message From Else Block.. </ng-template>
   
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMsg :  boolean = true;
  title = 'ngIfApp';

  toggle(){
    if (this.showMsg){
      this.showMsg = false;
    }
    else{
      this.showMsg = true;
    }
  }


}
