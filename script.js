const myLibrary= []


function Book(name, author, numberOfPages, completed, id){
    this.name=name
    this.author=author
    this.numberOfPages=numberOfPages
    this.completed=completed
    this.id=id

}
const Book1= new Book("1984", "George Orwell", "203171", "yes", crypto.randomUUID)
myLibrary.push(Book1)
const Book2= new Book("Animal Farm", "George Orwell", "112", "yes", crypto.randomUUID)
myLibrary.push(Book2)
const Book3= new Book("Limitless", "Jim Quick", "201", "352", crypto.randomUUID)
myLibrary.push(Book3)

console.log(myLibrary)

function addBooktoLibrary(){

}


const newBook=document.querySelector(".newBook")
newBook.onclick=function(){
    const show=document.querySelector(".addBook")
    if ( show.style.display=="flex"){
            show.style.display="none"

    }
    else{
        show.style.display="flex"
    }
}


addBooktoLibrary()