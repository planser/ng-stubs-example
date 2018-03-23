import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = "A Name";
  greeting: string;

  onGreet(greeting: string): void {
    this.greeting = greeting;
  }

}
