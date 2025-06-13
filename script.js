const myLibrary = [];

// Object constructor function
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages
  this.read = read == true ? true : false;
}

let booksContainer = document.querySelector(".books-container");



function addBookToLibrary(name, author, pages, read) {
  // creating elements
    let bookdiv = document.createElement("div");
    bookdiv.setAttribute("class", "book");
    let bookTitle = document.createElement("h2");
    bookTitle.setAttribute("class", "title");
    let bookAuthor = document.createElement("h2");
    bookAuthor.setAttribute("class", "author");
    let bookPages = document.createElement("h2");
    bookPages.setAttribute("class", "pages");
    let bookStatus = document.createElement("button");
    bookStatus.setAttribute("class", "status");
    //delete button 
    let deleteBookBtn = document.createElement("button");
    deleteBookBtn.textContent = "Delete Book";
    deleteBookBtn.setAttribute("class", "delete-book")
    //assigning elements
    bookTitle.textContent = name;
    bookAuthor.textContent = author;
    bookPages.textContent = pages;
    bookStatus.textContent = read ? "Completed" : "Not Completed";
    if(read){
      bookStatus.setAttribute("id", "completed");
    } else {
      bookStatus.setAttribute("id", "not-completed");
    }
    //appending elemenets
    bookdiv.appendChild(bookTitle);
    bookdiv.appendChild(bookAuthor);
    bookdiv.appendChild(bookPages);
    bookdiv.appendChild(bookStatus);
    bookdiv.appendChild(deleteBookBtn);
    booksContainer.appendChild(bookdiv); 
    deleteBookBtn.addEventListener("click", function(e) {
      deleteBk(e);
    });
    
    //storing in the array
    let book = new Book()
    book.name = bookTitle.textContent;
    book.author = bookAuthor.textContent;
    book.pages = bookPages.textContent;
    book.read = bookStatus.textContent;
    book.id = crypto.randomUUID();
    myLibrary.push(book);
    

    bookStatus.addEventListener("click", (e) => {
      book.toggleStatus(e);
    })
    // assigning the same id to the book div
    bookdiv.setAttribute("data-id", `${book.id}`);
  };
  

  
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
let name = document.querySelector("#bname").value;
let author = document.querySelector("#author").value;
let pages = document.querySelector("#pages").value;
let read = (document.querySelector('input[name="status"]:checked').id == 'yes') ?  true :  false;
addBookToLibrary(name, author, pages, read);
form.reset();
modal.close();
});




// Example books
addBookToLibrary("The Hobbit", "J.R.R. Tolkein", 310, true);
addBookToLibrary("Angels and Demons", "Dan Brown", 616, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 19, true);
addBookToLibrary("Atomic Habits", "James Clear", 320, false);
addBookToLibrary("The Book Thief", "Markus Zusak", 552, false)


function deleteBk(e) {
    let bk = e.target.parentNode;
      booksContainer.removeChild(bk);
      let bkID = bk.getAttribute("data-id");
      // deleting from the array
      for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        if(book.id == bkID) {
          let index = i;
          myLibrary.splice(index, 1);
          return;
        }
      }
  }

  Book.prototype.toggleStatus =function(e) {
    this.read = !(this.read);
    e.target.textContent = this.read ? 'Completed' : 'Not Completed';
    let book = document.querySelector(`.book[data-id='${this.id}']`);
    let button = book.querySelector("button");
    if (this.read) {
      button.setAttribute("id", "completed");      
    } else {
     button.setAttribute("id", "not-completed") ;
    }
  };

