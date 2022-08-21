const addButton = document.querySelector("#addBook");
const closeButton = document.querySelector(".closeButton");
const popBody = document.querySelector(".pop");
const submitButton = document.querySelector(".submitButton");

const grid = document.querySelector(".gridDisplay");



let myLibrary = [];

function Book(book, author, pages, read ) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.read = read;

}


function addBookToLibrary() {
  // do stuff here
}



submitButton.addEventListener('click', (e) => {

    e.preventDefault();

    const book1 = document.querySelector("#bTitle").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;


    var newBook1 = new Book(book1, author, pages, "no");
    myLibrary.push(newBook1);





    popBody.style.transform = "scale(0)";
    const newBook = document.createElement("div");
    newBook.classList.add("bookBody");
    newBook.innerText = "lol";
    grid.appendChild(newBook);





    console.log(newBook1);
})


addButton.addEventListener('click', () =>{
    popBody.style.transform = "scale(1)";



    console.log('hello');
});

closeButton.addEventListener('click', () =>{
    popBody.style.transform = "scale(0)";

    console.log('hello');
});