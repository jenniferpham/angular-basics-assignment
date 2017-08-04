import { Component } from '@angular/core';
'./app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private randomNumber:number;
  private message: string;

  constructor(){

  }

  getMessage(){
    this.randomNumber = Math.floor(Math.random() * 10 + 1);

    if(this.randomNumber <= 5){
      this.message = 'success';
    }
    else{
      this.message = 'warning'
    }
  }
}
