;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        return this.money + value;
    }
};
var mySelf = {
    name: 'Assad',
    bankAccount: bankAccount,
    hobbies: ['Violin', 'Cooking']
};
console.log(mySelf.bankAccount.deposit(3000));
console.log(mySelf);
