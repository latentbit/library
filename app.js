// Write a constructor for making "book" objects
// Create a library variable that holds books
// Write a function that create a book and add it to the library variable

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

// Make a function that loops through the library array, then display the books

const addBookButton = document.querySelector('#add-book');
const bookContainer = document.querySelector('main');

function displayBooks() {
    library.forEach(function(item) {
        console.log(item.info());
    })
}

function createBookContainer() {
    const book = document.createElement('div');
    book.classList.add('book');
    book.innerHTML = 
    `
        <h2>Title of book</h2>
        <p>Author: <span></span></p>
        <p>Number of pages: <span></span></p>
        <p>Read status: <span></span></p>
        <button class="remove-book">Remove</button>
    `;
    bookContainer.appendChild(book);
}

addBookToLibrary("Cho Tôi Xin Một Vé Đi Tuổi Thơ", "Nguyễn Nhật Ánh", 208, true);
addBookToLibrary("Mắt Biếc", "Nguyễn Nhật Ánh", 320, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Dune", "Frank Herbert", 688, false);