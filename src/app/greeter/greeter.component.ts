import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {

  @Input()
  name: string;
  @Output()
  greet = new EventEmitter<string>();

  onClick(): void {
    this.greet.emit(`Hi, ${this.name}`);
  }


}
