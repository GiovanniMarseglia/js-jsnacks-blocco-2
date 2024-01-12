// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

let numeri=[]
let somma=0
let i=0

do{
    let contenitore = +prompt("Scrivi un numero da sommare")
    if(isNaN(contenitore)){
     alert("inserisci solo numeri")
    }else{
        numeri[i] = contenitore
    somma = somma + contenitore
    i++
    console.log(somma)
    }
    
}while(somma <= 50)




