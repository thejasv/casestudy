import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account } from '../../models/account.model';
import { Educationloan } from '../../models/educationloan.model';
import { PersonalLoan } from '../../models/personalloan.model';
import { CustomerService } from '../../services/customer.service';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  personalloanform=false;
  educationloanform=false;
  eduloan:Educationloan;
  personalloan:PersonalLoan;
  custid;
  customer:account;
  roi;
  experience;
  
  constructor(private customerService:CustomerService,private loanService:LoanService,private router:Router) { }

  ngOnInit(): void {
    this.custid=sessionStorage.getItem('custId');
    this.customer=this.customerService.onGetUserById(this.custid);
  }
  onSubmiteduloan(value)
  {
    this.eduloan=new Educationloan(
      this.custid,
      this.customer.name,
      this.customer.accountnumber,
      "educationloan",
      value.loanamount,
      value.loanapplydate,
      value.loanissuedate,
      value.rateofinterest,
      value.duration,
      value.coursefee,
      value.course,
      value.fathername,
      value.fatheroccupation,
      value.fathertotalexperience,
      value.fatherexperiencecurrentcompany,
      value.rationcardnumber,
      value.annualincome);
      this.loanService.onApplyEduLoan(this.eduloan);
      this.router.navigateByUrl("/home-page");
  }
  onTotalExperienceInput(event:Event)
  {
    this.experience=(<HTMLInputElement>event.target).value;
  }
  onSubmitpersonalloan(value)
  {
    this.personalloan=new PersonalLoan(
      this.custid,
      this.customer.name,
      this.customer.accountnumber,
      "personal loan",
      value.loanamount,
      value.loanapplydate,
      value.loanissuedate,
      value.rateofinterest,
      value.duration,
      value.companyname,
      value.annualincome,
      value.designation,
      value.totalexperience,
      value.experienceincurrentcompany);
      this.loanService.onApplyPersonalLoan(this.personalloan);
      this.router.navigateByUrl("/home-page");
  }
  onLoanType(event:Event)
  {
    if((<HTMLSelectElement>event.target).value=="personalloan")
    {
      this.personalloanform=true;
      this.educationloanform=false;
      this.roi=10;
    }
    else if((<HTMLSelectElement>event.target).value=="educationloan")
    {
      this.educationloanform=true;
      this.personalloanform=false;
      this.roi=5;
    }

  }
}
