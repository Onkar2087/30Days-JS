//Task-1
console.log("Task-1");
book = {
    title : "Unicorn",
    author : "Gru",
    year : 2024
}
console.log(book);
console.log("\n");

//Task-2
console.log("Task-2");
console.log(book.author);
console.log(book.title);
console.log("\n");

//Task-3
console.log("Task-3");
book = {
    title : "Unicorn",
    author : "Gru",
    year : 2024,
    abtBook : function(){
        return `Title of the book is ${this.title} and author is ${this.author}`;
    }
}
console.log(book.abtBook());
console.log("\n");

//Task-4
console.log("Task-4");
book = {
    title : "Unicorn",
    author : "Gru",
    year : 2024,
    upYear : function(y){
        return this.year = y
    }
}
console.log(book.upYear(1990));
console.log(book);

//Task-5
console.log("Task-5");
library = {
    name : "Aaj ki library",
    books : [
        {
            title : "Kung fu Panda",
            author : "Jack Black",
            year : 2008
        },
        {
            title : "Finding Nemo",
            author : "Nemo",
            year : 2003
        },
        {
            title : "Cars",
            author : "Lightning Mcqueen",
            year : "2006"
        }
    ]
}
console.log(library);
console.log("\n");

//Task-6
console.log("Task-6");
console.log(library.name);
library.books.forEach(element => {
    console.log(element.title);
});

//Task-7
console.log("Task-7");
book = {
    title : "Unicorn",
    author : "Gru",
    year : 2024,
    upYear : function(y){
        return this.year = y
    },
    show : function(){
        return`Title of the book is ${this.title} and year is ${this.year}`;
    }
}
console.log(book.show());
console.log("\n");

//Task-8
console.log("Task-8");
for (const key in book) {
    console.log(`Property = ${key}`);
    console.log(`Value = ${book[key]}`);
    console.log("\n");
}

//Task-9
console.log("Task-9");
console.log(Object.keys(Book));
console.log("\n");
console.log(Object.values(book));