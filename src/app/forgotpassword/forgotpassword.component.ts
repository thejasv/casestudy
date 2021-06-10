import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  invalid:boolean=false;
  constructor(private customerService:CustomerService,private router:Router) {

   }

  ngOnInit(): void {
  }
  onSubmit(value)
  {
    let acc=this.customerService.onGetUser(value.username);
    let username=value.username;
    if(acc!=undefined)
    {
      this.router.navigate(["/forgotpassword-page/newpasswordupdate-page",username]);
    }
    else
    {
      this.invalid=true;
    }

  }

}
