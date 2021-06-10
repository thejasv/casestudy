export class PersonalLoan
{
    constructor(
        public customerid:string,
        public name:string,
        public accountnumber:string,
        public loantype:string,
        public loanamount:number,
        public loanapplydate:Date,
        public loanissuedate:Date,
        public rateofinterest:number,
        public duration:number,
        public companyname:string,
        public annualincome:number,
        public designation:string,
        public totalexperience:number,
        public experienceincurrentcompany:number
    )
    {

    }
}