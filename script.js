const myLibrary = [];

// Object constructor function
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages
  this.read = read == true ? true : false;
}

function addBookToLibrary(bkname, bkauthor, bkpages, bkread) {
  let book = new Book(bkname, bkauthor, bkpages, bkread);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
}

addBookToLibrary("Harry Potter", "J K Rowling", 300, true);
addBookToLibrary("Angels and Demons", "Dan Brown", 300, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 300, true);


let booksContainer = document.querySelector(".books-container");
function displayBook(myLibrary) {
  myLibrary.forEach(element => {
    // creating elements
    let book = document.createElement("div");
    book.setAttribute("class", "book");
    let title = document.createElement("h2");
    title.setAttribute("class", "title");
    let author = document.createElement("h2");
    author.setAttribute("class", "author");
    let pages = document.createElement("h2");
    pages.setAttribute("class", "pages");
    let status = document.createElement("h2");
    status.setAttribute("class", "pages");
    //assigning elements
    title.textContent = element.name;
    author.textContent = element.author;
    pages.textContent = element.pages;
    status.textContent = element.read;




    //appending elemenets
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(status);
    booksContainer.appendChild(book); 
    
  });
}

displayBook(myLibrary);

// making the modal fuctional
let modal = document.querySelector("dialog");
let addNewBook = document.querySelector(".new-book");
let closeModal = document.querySelector(".close-modal")
let form = document.querySelector("form");

addNewBook.addEventListener("click", () => {
  modal.showModal();
})

closeModal.addEventListener("click", () => {
  modal.close();
})

modal.addEventListener("submit", (e) => {
e.preventDefault();
let book = new Book();
book.name = document.querySelector("#bname").value;
book.author = document.querySelector("#author").value;
book.pages = document.querySelector("#pages").value;
// Add book.read here
book.id = crypto.randomUUID();
myLibrary.push(book);

form.reset();
modal.close();
console.log(myLibrary);
});



