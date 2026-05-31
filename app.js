// Write a constructor for making "Book" objects
    //The constructor should contain the book's title, author, number of pages, read status, 
    // an info() method that reports the object's information like so: 
        // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// Create a library variable that holds books
// Write a constructor for making "book" objects
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