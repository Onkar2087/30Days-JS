//1
console.log("Feature Request - 1");
book = {
    title : "Genz Youtuber",
    author : "Steeper Boy",
    year : 2017,
    bookInfo : () => console.log(`Title of the book is ${this.title} and Author of the book is ${this.author}`),
    updateYear : (saal) => this.year = saal,
    ret : () => console.log(`Title of the book is ${this.title} and year is ${this.year}`)
}
console.log(book.title);
book.ret();
book.bookInfo();
console.log("\n");
