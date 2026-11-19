import { Component } from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';
import { ResultsComponent } from '../results.component/results.component';

@Component({
  imports: [InputsComponent,ResultsComponent],
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  Data: {duration: number, interest: number, annualInvestment: number, initialInvestment: number} = {duration: 0, interest: 0, annualInvestment: 0, initialInvestment: 0};
  showResultsModal = false;
  displayPop({duration, interest, annualInvestment, initialInvestment}: {duration: number, interest: number, annualInvestment: number, initialInvestment: number}){
    this.showResultsModal = true;
    this.Data = {duration, interest, annualInvestment, initialInvestment};
  }
  closeTab(){
     this.showResultsModal = false;
  }

}
