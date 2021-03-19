let myLibrary = [];
let form = document.getElementById("form");
let container = document.getElementById("container");
localStorage
class Book {
  constructor (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.newDiv;
}
div() {
  let book = document.createElement("div");
  let button = document.createElement("button");
  let isRead = document.createElement("input");
  let br = document.createElement("br");
  isRead.type = "checkbox";
  let bookInfo = `
  Title: ${this.title}</br>
  Author: ${this.author}</br>
  Pages: ${this.pages}</br>
  Read: 
  `;
  isRead.checked = this.read;
  book.innerHTML = bookInfo;
  book.classList.add("newDiv");
  button.classList.add("remove-btn")
  book.appendChild(isRead);
  book.appendChild(br);
  book.appendChild(button);
  button.innerHTML = "Remove";
  button.onclick = () => this.dispose(this.title);
  this.newDiv = book;
  return this.newDiv;
} 

dispose(title) {
  this.newDiv.remove();
  myLibrary = myLibrary.filter(book => book.title != title);
}
}

function removeInput() {
  form.title.value = "";
  form.author.value = "";
  form.pages.value = "";
  form.read.checked = false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayList() {
  for (books of myLibrary) {
    container.appendChild(books.div());
  }
}

form.addEventListener ('submit', () => {
  if (form.title.value.length < 1 || form.author.value.length < 1 || form.pages.value.length < 1 || isNaN(parseInt(form.pages.value))){
    alert('You have to fill the form');
  }else {
    let book = new Book(form.title.value, form.author.value, form.pages.value, form.read.checked);
    removeInput()
    addBookToLibrary(book);
    container.innerHTML = "";
    displayList();
  }
}
)
