import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collapsed=true;
  id=sessionStorage.getItem("custId");
  
  updatecomponent:boolean;
  loancomponent:boolean;
  constructor(private customerService:CustomerService,private router:Router) {
    
   }

  ngOnInit(): void {
  }
  
  onUpdateClick()
  {
    this.updatecomponent=true;
    this.loancomponent=false;
  }
  onLoanClick()
  {
    this.loancomponent=true;
    this.updatecomponent=false;
  }
  
}
