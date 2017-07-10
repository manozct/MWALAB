/**
 * Created by manozct on 7/10/2017.
 */
interface BankAccountInterface{
    money:number;
    deposit(value:number):void;

};
let bankAccount:BankAccountInterface={
    money:2000,
    deposit(value:number){
        return this.money+value;
    }

}

interface MySelf{
    name:String;
    bankAccount:BankAccountInterface,
    hobbies:string[]
}
let mySelf:MySelf={
    name:'Assad',
    bankAccount:bankAccount,
    hobbies:['Violin','Cooking']
}
console.log(mySelf.bankAccount.deposit(3000));
console.log(mySelf);