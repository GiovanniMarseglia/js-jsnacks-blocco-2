// genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso"
// nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale

let NCasuale = Math.floor(Math.random() * ( 101 - 0 ) - 0)
console.log(NCasuale)

let NumeroUtente = 0

do{
    NumeroUtente = +prompt("Inserisci un numero")
    if(NumeroUtente > NCasuale){
        console.log("numero troppo alto")
        // numero troppo alto
    }else if(NumeroUtente < NCasuale){
        // numero troppo basso
        console.log("numero troppo basso")
    }else{
        // numero giusto
        console.log("numero esatto")
    }

}while(NumeroUtente != NCasuale)2

