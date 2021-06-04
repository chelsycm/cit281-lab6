class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn};
        this._books.push(newBook);
      }
    }
    deleteBook(isbn){
      //(1) find the index of the book with the given isbn within the "_books" array.
     /* let indexOfBookToRemove = null; 
      let index = 0; 
      for (const book of this._books){
        if (book.isbn == isbn){
          indexOfBookToRemove = index;
          break;
        }
          index += 1; 
      }
      */
     for (let index = 0; index < this._books.length; index++){
       const book = this._books[index];
       if (book.isbn == isbn){
         indexOfBookToRemove = index;
         break;
       }
     }
      /*
      variable = null 
      loop (for/while){
        filtering (if){
          modify/update variable 
          
          (potentially -- but not necessarily -- exit the loop early)
        }
      }
      // var ready to go 
    */

      //(2) Once the index has been found, remove the entry from "_books". (DONE)
      this._books.splice(indexOfBookToRemove);
    }
    listBooks() {
      for (const monster of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`);
      }
    }
  }

  const myBook = new Book("AP Calc Crasg Course","Banu et al.", "01/10/2013", "5875457899")
  const atomicHabits = new Book ("Atomic Habits", "James Clear", "10/16/2018","098754231")
  const aboutMe = new Book ("About Me", "Chelsy Cortes", "01/31/2021","09765432")
  const theAlchemist = new Book ("The Alchemist", "Paulo Coelho", "10/10/2005", "986543221" )
  
  let uoLibrary = new Library ("Knight")
  console.log("ADDING BOOKS");
  uoLibrary.addBook(myBook);
  uoLibrary.addBook(atomicHabits);
  uoLibrary.addBook(aboutMe);
  uoLibrary.listBooks();
  console.log("DELETING BOOKS")
  uoLibrary.deleteBook("5875457899");
  uoLibrary.listBooks()



