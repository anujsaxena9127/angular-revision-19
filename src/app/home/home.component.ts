import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //passing data from parent to child compoenent
  message1="hello greeting from home component"
// event: KeyboardEvent | undefined;
  keyupEventhandler(event:KeyboardEvent){
    console.log(`user press the ${event.key}`)
  }

}
