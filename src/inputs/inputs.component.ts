import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-inputs',
  styleUrl: './inputs.component.css',
  templateUrl: './inputs.component.html',
})
export class InputsComponent{
@Output() DatatoTransfer = new EventEmitter<{duration: number, interest: number, annualInvestment: number, initialInvestment: number}>();
  
  duration : number = 0;
  interest : number = 0;
  annualInvestment : number = 0;
  initialInvestment : number = 0;


 emittData(){
  this.DatatoTransfer.emit({duration: this.duration, interest: this.interest, annualInvestment: this.annualInvestment, initialInvestment: this.initialInvestment});
 }
//@Output() resultdisplay = new EventEmitter<void>();
  showResults(){
   //this.resultdisplay.emit();
   this.emittData();
  }
}
