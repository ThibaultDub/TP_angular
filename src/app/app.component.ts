import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Thibault';
  names: string[] = ['Ironman', 'Captain America'];

  sayHello():void {
    alert('HELLO')
  }
}
