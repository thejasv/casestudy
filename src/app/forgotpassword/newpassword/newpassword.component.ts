import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  username:string="";
  newpass:string="";
  invalid:boolean=false;
  constructor(private route:ActivatedRoute,private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['username'];
  }
  onSubmit(value)
  {
    this.customerService.onForgotPasswordUpdate(this.username,value.newpassword);
    this.router.navigateByUrl('');
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
