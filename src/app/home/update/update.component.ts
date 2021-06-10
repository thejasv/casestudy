import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account } from 'src/app/models/account.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  acc:account;
  card:string;
  idpattern:string;
  idcardplaceholder:string;
  today1 = new Date();
  mindate = new Date(this.today1.getFullYear() - 96, this.today1.getMonth(), this.today1.getDate());
  maxdate = new Date(this.today1.getFullYear() - 18, this.today1.getMonth(), this.today1.getDate());
  senior1 = new Date(this.today1.getFullYear() - 60, this.today1.getMonth(), this.today1.getDate());
  today = this.datepipe.transform(this.today1, 'yyyy-MM-dd');
  senior = this.datepipe.transform(this.senior1, 'yyyy-MM-dd');
  initialDepositAmount:number;
  constructor(private router:Router,private datepipe:DatePipe,private customerService:CustomerService) {
   }
  customerid=sessionStorage.getItem("custId");
  ngOnInit(): void {
    this.acc=this.customerService.onGetUserById(this.customerid);
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
  onSubmit(value)
  {
    this.customerService.onAccountUpdate(value);
    this.router.navigateByUrl("/home-page");
  }
}

 