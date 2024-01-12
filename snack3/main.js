// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro


let listaA=[]
let listaB=[]
let i=0

function NumeroRandom(){
    return Math.floor(Math.random()* (11-1) - 0)
}

let A = NumeroRandom()
let B = NumeroRandom()



while(i < A){
    listaA[i]= NumeroRandom()
    console.log(listaA[i])
    i++
}

i=0

while(i < B){
    listaB[i]= NumeroRandom()
    console.log(listaB[i])
    i++
}







if(listaA.length < listaB.length){
    
    // lista a piu piccola
    do{
        A++
        listaA[A-1] = prompt(`inserisci ${(listaB.length  - listaA.length)}  numeri per la lista A`)
        console.log(`lista A ${listaA}`)
        
    }
    while(listaA.length < listaB.length)
        




}else if(listaA.length > listaB.length){
    do{
        B++
        listaB[B-1] = prompt(`inserisci ${(listaA.length - listaB.length)} numeri per la lista B`)
        console.log(`lista B ${listaB}`)
    }
    while(listaB.length < listaA.length)



}else{
    // numero uguale
    console.log("le liste sono uguali")
}








