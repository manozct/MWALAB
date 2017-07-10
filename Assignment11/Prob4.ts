/**
 * Created by manozct on 7/10/2017.
 */
class Person{
    private _firstName:string;
    get firstName():string{
        return this._firstName;
    }
    set firstName(firstName:string){
        this._firstName=firstName.toUpperCase();
    }
}
let person=new Person();
person.firstName='Assad';
console.log(person.firstName);

