// Task-1
let n = 0;
if(n>0){
    console.log("Number is positive");
}
else if(n<0){
    console.log("Number is negative");
}
else{
    console.log("Number is zero");
}

//Task-2
let age = 17;
if(age>=18){
    console.log("Person is eligible to vote");
}
else{
    console.log("Person is not eligible to vote");
}

//Task-3
let a = 34;
let b = 67;
let c = 19;
if(a>b && a>c){
    console.log(`Largest of the three numbers is a = ${a}`);
}
else if(b>a && b>c){
    console.log(`Largest of the three numbers is b = ${b}`);
}
else{
    console.log(`Largest of the three numbers is c = ${c}`);
}

//Task-4
let day = 5;
switch(day){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Enter a day number between 1 to 7");
}

//Task-5
let score = 87;
switch(true){
    case score>=90 && score<=100:
        console.log("Grade is A");
        break
    case score>=80 && score<=90 :
        console.log("Grade is B");
        break;
    case score>=70 && score<=80:
        console.log("Grade is C");
        break;
    case  score>=60 && score<=70:
        console.log("Grade is D");
        break;
    default:
        console.log("Grade is F");
        break;
}

// Task-6
let num = 131;
let check = (num%2==0)? "Even number" : "Odd number"
console.log(check);

// Task-7
let year = 1900;
if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    console.log("It is a leap year");
else
    console.log("Not a leap year");
