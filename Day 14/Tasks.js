//Task-1
console.log("Task-1");
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

//Task-2
console.log("Task-2");
Person.prototype.updateAge = function(age){
    this.age = age;
    console.log(`The updated age is ${this.age}`);
}
o1.updateAge(23);
console.log("\n");

//Task-3
console.log("Task-3");
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
console.log("\n");

//Task-4
console.log("Task-4");
Student.prototype.greet = function(){
    console.log(`Hello, ${this.name} and your Student Id is ${this.studentId}`);
}

o1.greet();
o2.greet();
console.log("\n");

//Task-5
console.log("Task-5");
Person.genericGreet = function()
{
    console.log(`Hol Casita, this is a generic Greet message and is called with the help of class`);
}

Person.genericGreet();
console.log("\n");

//Task-6
console.log("Task-6");


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

//Task-7
console.log("Task-7 + Task-8");
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

//Task-9
console.log("Task-9");
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
console.log("\n");

//Task-10
console.log("Task-10");
const p1 = new Account(300);
p1.deposit(50);
p1.withdraw(200);
p1.withdraw(200);
p1.display();
console.log("\n");


