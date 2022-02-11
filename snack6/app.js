// Stampa il cubo dei primi N numeri, dove N è un numero 
// indicato dall’utente

let nNumeri = parseFloat(prompt("inserisci un numero!"));
while (isNaN(nNumeri)) {
    alert("non hai inserito un numero!");
    nNumeri = parseFloat(prompt("inserisci un numero!"));
}

const numeriCubo = [];

for ( i = 0; i < nNumeri; i++ ) {
    let numeroCubo = Math.pow( i+1, 3);
    numeriCubo.push(numeroCubo);
}

console.log(numeriCubo)