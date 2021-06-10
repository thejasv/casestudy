import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  invalid:boolean=false;
  newpass:string='';
  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(value)
  {
      this.customerService.onUpdatePassword(value.newpassword);
      this.router.navigateByUrl("/home-page");

    
  }
  onPasswordCheck(event:Event)
  {
    if(this.newpass==(<HTMLInputElement>event.target).value)
    {
      this.invalid=true;
    }
    else
    {
      this.invalid=false;
    }
  }
}
