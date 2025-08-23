const myLibrary= []

function Book(){

}
function addBookToLibrary(name, author, numberOfPages, completed){
    this.name=name
    this.author=author
    this.numberOfPages=numberOfPages
    this.completed=completed


}


const newBook= new addBookToLibrary("1984", "George Orwell", "201", "yes")
    console.log(newBook)