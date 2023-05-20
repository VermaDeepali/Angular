import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  userName = ""
  constructor(){

  }

  onUserCreate(event: Event){
    this.userName = (<HTMLInputElement>event.target).value
  }

  onUserClick(){
    this.userName = ""
  }
}
