import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  invalid=false;
  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  onSubmit(value: { username: string; password: string; })
  {
    let account=this.customerService.onGetUser(value.username);
    if ( account==undefined||account.password != value.password ) {
      this.router.navigateByUrl("");
      this.invalid = true;
    }
    else {
      sessionStorage.setItem("custId",account.customerid);
      this.router.navigateByUrl("/home-page");
    }

  }
}
