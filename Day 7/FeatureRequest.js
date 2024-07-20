//1
console.log("Feature Request - 1");
book = {
    title : "Genz Youtuber",
    author : "Steeper Boy",
    year : 2017,
    bookInfo : function() {console.log(`Title of the book is ${this.title} and Author of the book is ${this.author}`)},
    updateYear : (saal) => this.year = saal,
    ret : function() {console.log(`Title of the book is ${this.title} and year is ${this.year}`)}
}
console.log(book.title);
book.ret();
book.bookInfo();
console.log("\n");

//2
console.log("Feature Request - 2");
library = {
    name : "Aaj ki Library",
    books : [
        {
            title : "Champak",
            author : "Hoga koi",
            year : 2005
        },
        {
            title : "Tinkle",
            author : "No idea",
            year : 2007
        }
    ]
}
console.log(library);
console.log("\n");

//3
console.log("Feature Request - 3");
for (const key in book) {
    console.log(`Property = ${key}`);
    console.log(`Value = ${book[key]}`);
    console.log("\n");
}

console.log(Object.keys(Book));
console.log("\n");
console.log(Object.values(book));
