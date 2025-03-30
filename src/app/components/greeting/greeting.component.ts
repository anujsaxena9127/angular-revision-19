import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  message=input("hello from greeting")
  messageSignal=signal("hello from signal")

}
