export class Educationloan
{
    constructor(
    public customerid:string,
    public name:string,
    public accountnumber:string,
    public loantype:string,
    public loanamount:number,
    public loanapplydate:Date,
    public loanissuedate:Date,
    public rateofinsterest:number,
    public duration:number,
    public coursefee:number,
    public course:string,
    public fathername:string,
    public fatheroccupation:string,
    public fathertotalexperience:number,
    public fatherexperiencecurrentcompany:number,
    public rationcardnumber:string,
    public annualincome:number )
    {

    }
}
