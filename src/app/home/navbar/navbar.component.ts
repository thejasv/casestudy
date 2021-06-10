import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id:string;
  name:string;
  constructor(private router:Router,private customerService:CustomerService) {
    this.id=sessionStorage.getItem("custId");
    this.name=this.customerService.onGetName(this.id);
   }

  ngOnInit(): void {
  }
  onLogout()
  {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }
}
