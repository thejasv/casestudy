import { Component, OnInit } from '@angular/core';
import {account} from '../models/account.model'
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  acc:account;
  idpattern:string="";
  card:string="";
  idcardplaceholder:string="";
  citizenstatus:string;
  initialDepositAmount:number = 0;
  country:string;

  constructor(private router:Router,public datepipe:DatePipe,private customerService:CustomerService) 
  {
      
  }
  ngOnInit(): void {
  }
  
  today1 = new Date();
  mindate = new Date(this.today1.getFullYear() - 96, this.today1.getMonth(), this.today1.getDate());
  maxdate = new Date(this.today1.getFullYear() - 18, this.today1.getMonth(), this.today1.getDate());
  senior1 = new Date(this.today1.getFullYear() - 60, this.today1.getMonth(), this.today1.getDate());

  today = this.datepipe.transform(this.today1, 'yyyy-MM-dd');
  senior= this.datepipe.transform(this.senior1, 'yyyy-MM-dd');

  getRandomNumber(min: number,max: number)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  createArrayOfNumbers(start: number,end: number)
  {
    let array=[];

    for(let i=start;i<=end;i++)
    {
      array.push(i);
    }
    return array;
  }
  customerIdArray=this.createArrayOfNumbers(100,999);
  // accountNumberArray=this.createArrayOfNumbers(1000000000000000,9999999999999999);

  randomCustIndex=this.getRandomNumber(0,this.customerIdArray.length-1);
  // randomAccIndex=this.getRandomNumber(0,this.accountNumberArray.length-1);

  RandomCustNumber=this.customerIdArray[this.randomCustIndex];
  n=this.customerIdArray.splice(this.randomCustIndex,1);

  // RandomAccNumber=this.accountNumberArray[this.randomAccIndex];
  // m=this.accountNumberArray.splice(this.randomAccIndex,1);

  CustomerId="R-"+this.RandomCustNumber;
  RandomAccNumber=this.getRandomNumber(1000000000000000,9999999999999999);

 
  onIdType(event:Event)
  {
    this.card=(<HTMLSelectElement>event.target).value;
    
    if(this.card==="pancard")
    {
      this.idpattern="[A-Z0-9]{12}";
      this.idcardplaceholder="Enter Pan number"
    } 
    else if (this.card==="aadhar")
    {
      this.idpattern="[0-9]{12}";
      this.idcardplaceholder="Enter aadhar number"
    }
  }
  onAccountType(event:Event)
  {
    if((<HTMLSelectElement>event.target).value=="savings")
    {
      this.initialDepositAmount=5000;
    }
    else if((<HTMLSelectElement>event.target).value=="salary")
    {
      this.initialDepositAmount=0;
    }
    
  }
  onDateofbirth(event:Event)
  {
    let dob=(<HTMLInputElement>event.target).value;
    if(dob>this.senior)
    {
      this.citizenstatus="normal";
    }
    else if(dob<this.senior)
    {
      this.citizenstatus="senior";
    }

  }
  onCitizenship(event:Event)
  {
    if((<HTMLSelectElement>event.target).value=="indian")
    {
      this.country="India";
    }
    else if((<HTMLSelectElement>event.target).value=="foreign")
    {
      this.country="";
    }
  }
  onSubmit(value:any)
  {
    this.acc = new account(this.CustomerId,
      ""+this.RandomAccNumber,
      value.name,
      value.username,
      value.password,
      value.guardiantype,
      value.guardianname,
      value.address,
      value.citizenship,
      value.state,
      this.country,
      value.email,
      value.gender,
      value.maritalstatus,
      value.contactnumber,
      value.dateofbirth,
      this.today1,
      value.accounttype,
      value.branchname,
      this.citizenstatus,
      value.initialdeposit,
      value.identificationtype,
      value.idcardnumber,
      value.referenceaccountholdername,
      value.referenceaccountholderaccountnumber,
      value.referenceaccountholderaddress
    );
    this.customerService.onCreate(this.acc); 
    this.router.navigateByUrl("login-page");
  }
  
}
