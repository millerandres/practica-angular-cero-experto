import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public counter: number = 10;
  title = 'bases';

  incrementar():void{
    this.counter +=1;
  }
  decrementar():void{
    this.counter -=1;
  }
  reset():void{
    this.counter =10;
  }
}
