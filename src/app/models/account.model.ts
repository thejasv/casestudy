export class account {
    constructor(
        public customerid: string,
        public accountnumber: string,
        public name: string,
        public username: string,
        public password: string,
        public guardiantype: string,
        public guardianname: string,
        public address: string,
        public citizenship: string,
        public state: string,
        public country: string,
        public email: string,
        public gender: string,
        public maritalstatus: string,
        public contactnumber: string,
        public dateofbirth: Date,
        public registrationdate: Date,
        public accounttype: string,
        public branchname: string,
        public citizenstatus: string,
        public initialdeposit: number,
        public identificationtype: string,
        public idcardnumber: string,
        public referenceaccountholdername: string,
        public referenceaccountholderaccountnumber: string,
        public referenceaccountholderaddress: string
    ) { }
    
}