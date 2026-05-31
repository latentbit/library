// Write a constructor for making "book" objects
// Create a library variable that holds books
// Write a function that create a book and add it to the library variable

// Write a function that loops through the library to display books on a table in html

// Create an "New book" button that allows the user to add a book through a form that has: 
// a book name section, author, number of pages, read status

function Book(title, author, numOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numOfPages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}

Book.prototype.info = function() {
    const status = (this.readStatus) ? 'read' : 'not read';
    return `"${this.title}" by ${this.author}, ${this.numberOfPages} pages, ${status}.`;
}

let library = [];

function addBookToLibrary(title, author, numOfPages, readStatus) {
    const book = new Book(title, author, numOfPages, readStatus);
    library.push(book);
}

addBookToLibrary("Cho Tôi Xin Một Vé Đi Tuổi Thơ", "Nguyễn Nhật Ánh", 208, true);
addBookToLibrary("Mắt Biếc", "Nguyễn Nhật Ánh", 320, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Dune", "Frank Herbert", 688, false);

console.log(library);