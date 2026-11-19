import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Input } from '@angular/core';
@Component({
  imports: [DecimalPipe],
  selector: 'app-results',
  styleUrl: './results.component.css',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit{
@Output() canceltab = new EventEmitter<void>();
@Input({required: true}) Data!: {duration: number, interest: number, 
                                 annualInvestment: number, initialInvestment: number};

annualData: {year: number, interest: number, valueEndOfYear: number, annualInvestment: number, totalInterest: number, totalAmountInvested: number}[] = [];                                 
ngOnInit(): void{
  this.annualData = this.calculateInvestmentResults();
  console.log(this.annualData);
}                
calculateInvestmentResults() {
  const annualData = [];
  let investmentValue = this.Data.initialInvestment;

  for (let i = 0; i < this.Data.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (this.Data.interest / 100);
    investmentValue += interestEarnedInYear + this.Data.annualInvestment;
    const totalInterest =
      investmentValue - this.Data.annualInvestment * year - this.Data.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: this.Data.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: this.Data.initialInvestment + this.Data.annualInvestment * year,
    });
  }

  return annualData;
}

close(){
  this.canceltab.emit();
}

}
