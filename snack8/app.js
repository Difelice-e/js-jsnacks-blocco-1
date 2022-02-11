// Chiedi un numero di 4 cifre all’utente e calcola la somma 
// di tutte le cifre che compongono il numero

let numeroUtente = prompt("inserisci un numero di 4 cifre");
 while (isNaN(numeroUtente) || numeroUtente < 1000 || numeroUtente > 9999) {
     alert("il numero che hai inserito non è valido o non è di 4 cifre!");
     numeroUtente = prompt("inserisci un numero di 4 cifre");
 }

 console.log(numeroUtente)

 const numeriArray = numeroUtente.split("");
 console.log(numeriArray);

 let [numero1, numero2, numero3, numero4] = numeriArray;
 numero1 = parseInt(numero1);
 numero2 = parseInt(numero2);
 numero3 = parseInt(numero3);
 numero4 = parseInt(numero4);

 let risultato = parseInt(numero1 + numero2 + numero3 + numero4);
 console.log(risultato);