//1
console.log("Feature Request - 1");
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet()
    {
        console.log(`Hello ${this.name}`);
        
    }
}

const o1 = new Person('Mirabel', 17);
o1.greet();
console.log("\n");

//2
console.log("Feature Request - 2");
class Student extends Person{
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }
    
    retID(){
        console.log(`Student Id is ${this.studentId}`);
        
    }
}
const o2 = new Student('Elsa', 18, 101);
o2.retID();

Student.prototype.greet = function(){
    console.log(`Hello, ${this.name} and your Student Id is ${this.studentId}`);
}

o1.greet();
o2.greet();
console.log("\n");

//3
console.log("Feature Request - 3");
Person.genericGreet = function()
{
    console.log(`Hol Casita, this is a generic Greet message and is called with the help of class`);
}

Person.genericGreet();
console.log("\n");

class Studen extends Person{
    
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
        Studen.count++;
        console.log(`Total Number of Student is ${Studen.count}`);
        
    }
}
Studen.count = 0;

const o3 = new Studen('po', 121, 1001);
const o4 = new Studen('tigress', 1212, 1002);
console.log(Studen.count);
console.log("\n");

//4
console.log("Feature Request - 4");
class PFullName{
    constructor(fname, lName){
        this._fname = fname;
        this._lName = lName;
    }
    get fullName(){
        return `My name is ${this._fname} ${this._lName}`
    }

    set fullName(name){
        const [firstName, lastName] = name.split(' ');
        this._fname = firstName
        this._lName = lastName;
    }
}

const n = new PFullName('mas','sad');
console.log(n.fullName);

n.fullName = 'jueong jungkook'
console.log(n.fullName);
console.log("\n");

//5
console.log("Feature Request - 5");
class Account{
    #balance;
    constructor(bal){
        this.#balance = bal;
    }

    deposit(money){
        this.#balance += money;
        console.log(`You have added ${money}. Balance is ${this.#balance}`);
    }

    withdraw(money){
        this.#balance < money ? 
            console.log(`Itne toh paise hi nahi hai account mei, bhai. Tere pass ${this.#balance} h`):
            console.log(`${money} withdrawn, (${this.#balance -= money}) left in the account`);
    }

    display(){
        console.log(`Balance = ${this.#balance}`);
        
    }
}

const p1 = new Account(300);
p1.deposit(50);
p1.withdraw(200);
p1.withdraw(200);
p1.display();
console.log("\n");




