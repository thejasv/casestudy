import { Injectable } from '@angular/core';
import { Educationloan } from '../models/educationloan.model';
import { PersonalLoan } from '../models/personalloan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }
  educationloans:Educationloan[]=[];
  personalloans:PersonalLoan[]=[];
  onApplyEduLoan(edu)
  {
    this.educationloans.push(edu);
    for(let a of this.educationloans)
    {
      console.log(a);
    }
  }
  onApplyPersonalLoan(personalloan)
  {
    this.personalloans.push(personalloan);
    for(let a of this.personalloans)
    {
      console.log(a);
    }
  }
}
