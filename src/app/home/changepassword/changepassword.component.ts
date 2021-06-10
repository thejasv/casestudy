import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account } from 'src/app/models/account.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  acc:account;
  id:string;
  invalid=false;
  constructor(private customerService:CustomerService,private router:Router) {  
    this.id=sessionStorage.getItem("custId");
    this.acc=this.customerService.onGetUserById(this.id);
  }
  ngOnInit(): void {
    
  }
  onSubmit(value)
  {
    if(this.acc.password==value.oldpassword)
    {
      this.router.navigateByUrl("/home-page/updatepassword-page");
    }
    else
    {
      this.invalid=true;
    }
  }
}
