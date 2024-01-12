// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let numero = +prompt("inserisci un numero")

for(let i=0; i != 1; i++){
    if((numero % 2) == 0){
        console.log(numero)
    }else{
        console.log(numero+1)
    }
}