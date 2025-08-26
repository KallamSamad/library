const myLibrary= []


function Book(name, author, numberOfPages, completed, id){
    this.name=name
    this.author=author
    this.numberOfPages=numberOfPages
    this.completed=completed
    this.id=id

}
const Book1= new Book("1984", "George Orwell", "300", "yes", crypto.randomUUID())
myLibrary.push(Book1)
const Book2= new Book("Animal Farm", "George Orwell", "112", "yes", crypto.randomUUID())
myLibrary.push(Book2)
const Book3= new Book("Limitless", "Jim Quick", "201", "yes", crypto.randomUUID())
myLibrary.push(Book3)

console.log(myLibrary)



const newBook=document.querySelector(".newBook")
newBook.onclick=function(){
    const show=document.querySelector(".addBook")
    if ( show.style.display=="flex"){
            show.style.display="none"
            newBook.value="Add Book"

    }
    else{
        show.style.display="flex"
        newBook.value="Close"
    }
    const formval=document.querySelector(".forminput")
    
}







function addBooktoLibrary(input){
      const table=document.querySelector(".table")
      const row=document.createElement("tr")
      table.appendChild(row)
      for (let key in input){
        const cell = document.createElement("td")
        cell.textContent=(input[key])
        row.appendChild(cell)


        }

      }
    

addBooktoLibrary(Book1)
addBooktoLibrary(Book2)
addBooktoLibrary(Book3)



const form = document.querySelector("form")
form.addEventListener("submit", function(e){
    e.preventDefault()
    const name=document.querySelector(".forminput#name").value
    const author=document.querySelector(".forminput#author").value
    const pages=document.querySelector(".forminput#pages").value
    const completed=document.querySelector(".forminput#completed").value
    const addnewBook=new Book(name,author,pages,completed,crypto.randomUUID())
    myLibrary.push(addnewBook)
    addBooktoLibrary(addnewBook)
    form.reset()
})
    
    
