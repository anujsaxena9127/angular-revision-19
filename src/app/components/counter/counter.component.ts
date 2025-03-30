import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterValue=signal(0)

incrementalvalue(){
  this.counterValue.set(this.counterValue()+1)

}
decrementalValue(){
  this.counterValue.set(this.counterValue()-1)
}
resetValue(){
  this.counterValue.set(0)

}

}
