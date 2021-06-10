import { Injectable } from '@angular/core';
import { account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  accounts:account[]=[{
         customerid:"R111",
         accountnumber: "1234567891011121",
         name: "Thejas V",
         username: "Thejas",
         password: "thejas@28",
         guardiantype: "father",
         guardianname: "Venkatesh",
         address: "50 MN halli",
         citizenship: "indian",
         state: "karnataka",
         country: "india",
         email: "thejashv.1998@gamil.com",
         gender: "male",
         maritalstatus: "unmarried",
         contactnumber: "9876543210",
         dateofbirth: new Date("1998-08-28"),
         registrationdate: new Date("2021-05-30"),
         accounttype: "savings",
         branchname: "Mn halli",
         citizenstatus: "adult",
         initialdeposit: 5000,
         identificationtype: "aadhar",
         idcardnumber: "902553702787",
         referenceaccountholdername: "Venkatesh",
         referenceaccountholderaccountnumber: "7896523145287953",
         referenceaccountholderaddress: "50 Mn Halli"
  }

  ];

  constructor() { }

  onGet(){
    return this.accounts;
  }

  onCreate(accounts:account){
    this.accounts.push(accounts);
    for(let a of this.accounts)
    {
      console.log(a);
    }
  }

  onGetUser(username){
    let acc=this.accounts.find(x=>x.username==username);
    return acc;
  }

  onGetUserById(customerId:string){
    let acc=this.accounts.find(x=>x.customerid===customerId);
    return acc;
  }
  onGetName(customerId:string){
    let acc=this.accounts.find(x=>x.customerid===customerId);
    return acc.name;
  }
  onAccountUpdate(value:account){
    let id=sessionStorage.getItem("custId");
    let acc=this.accounts.find(x=>x.customerid===id);
    let index=this.accounts.indexOf(acc);
    this.accounts[index].name=value.name;
    this.accounts[index].username= value.username;
    this.accounts[index].guardiantype=value.guardiantype; 
    this.accounts[index].guardianname=value.guardianname;
    this.accounts[index].address= value.address;
    this.accounts[index].citizenship =value.citizenship;
    this.accounts[index].state= value.state;
    this.accounts[index].country=value.country;
    this.accounts[index].email= value.email;
    this.accounts[index].gender=  value.gender,
    this.accounts[index].maritalstatus=  value.maritalstatus;
    this.accounts[index].contactnumber=  value.contactnumber;
    this.accounts[index].dateofbirth=  value.dateofbirth;
    this.accounts[index].accounttype=  value.accounttype;
    this.accounts[index].branchname= value.branchname;
    this.accounts[index].citizenstatus= value.citizenstatus;
    this.accounts[index].initialdeposit= value.initialdeposit;
    this.accounts[index].identificationtype=  value.identificationtype;
    this.accounts[index].idcardnumber=  value.idcardnumber;
    this.accounts[index].referenceaccountholdername= value.referenceaccountholdername;
    this.accounts[index].referenceaccountholderaccountnumber= value.referenceaccountholderaccountnumber;
    this.accounts[index].referenceaccountholderaddress= value.referenceaccountholderaddress;
  }
  onUpdatePassword(newpassword:string)
  {
    let id=sessionStorage.getItem("custId");
    let index=this.accounts.findIndex(x=>x.customerid===id);
    this.accounts[index].password=newpassword;
    console.log(this.accounts[index].password);
  }
  onForgotPasswordUpdate(username:string,password:string)
  {
    let ind=this.accounts.findIndex(x=>x.username=username);
    this.accounts[ind].password=password;
    console.log(password);
  }
}
