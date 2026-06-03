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
const booksContainer = document.querySelector('main');

function displayBooks() {
    library.forEach(function(item) {
        createBookContainer();
        addBookInformationToContainer(item);
    })
}

function createBookContainer() {
    const book = document.createElement('div');
    book.classList.add('book');
    book.classList.add('generated-book-container');
    book.innerHTML = 
    `
        <h2>Title of book</h2>
        <p>Author: <span></span></p>
        <p>Number of pages: <span></span></p>
        <p>Read status: <span></span></p>
        <button class="remove-book">Remove</button>
    `;
    booksContainer.appendChild(book);
}

function addBookInformationToContainer(bookObject) {
    const readStatus = (bookObject.readStatus) ? 'read' : 'not read';
    const bookNode = booksContainer.lastElementChild;
    bookNode.querySelector('h2').textContent = bookObject.title;
    bookNode.querySelector('p:first-of-type').querySelector('span').textContent = bookObject.author;
    bookNode.querySelector('p:nth-of-type(2)').querySelector('span').textContent = bookObject.numberOfPages;
    bookNode.querySelector('p:nth-of-type(3)').querySelector('span').textContent = readStatus;
    bookNode.classList.add(`${bookObject.id}`);
}

//bookNode.classList[2] is the index of the book's id

booksContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-book')) {
        const bookToBeDeleted = e.target.parentElement;
        const indexOfbookToBeDeleted = library.findIndex( item => {
            item.id === bookToBeDeleted.classList[2];
        })

        library.splice(indexOfbookToBeDeleted, 1);
        booksContainer.removeChild(bookToBeDeleted);
    }
})

// Create a book when users submit their form

const bookForm = document.querySelector('#book-dialog > form')

function resetForm(title, author, numberOfPages, readStatus, modal) {
    title.value = '';
    author.value = '';
    numberOfPages.value = '';
    readStatus.checked = false;
    modal.close();
}

function createCustomBookContainer() {
    event.preventDefault();
    const bookModal = bookForm.parentElement;
    const bookTitle = bookForm.querySelector('#title');
    const bookAuthor = bookForm.querySelector('#author');
    const bookNumberOfPages = bookForm.querySelector('#number-of-pages');
    const bookReadStatus = bookForm.querySelector('input[type="checkbox"]');
    const bookInformation = {
        author: bookAuthor.value,
        title: bookTitle.value,
        numberOfPages: bookNumberOfPages.value,
        readStatus: bookReadStatus.checked,
    }

    createBookContainer();
    library.push(bookInformation);
    addBookInformationToContainer(bookInformation);
    resetForm(bookTitle, bookAuthor, bookNumberOfPages, bookReadStatus, bookModal);
}

bookForm.addEventListener('submit', createCustomBookContainer);

addBookToLibrary("Tôi Thấy Hoa Vàng Trên Cỏ Xanh", "Nguyễn Nhật Ánh", 378, false);
addBookToLibrary("Đắc Nhân Tâm", "Dale Carnegie", 320, false);

displayBooks();