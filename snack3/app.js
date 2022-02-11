// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

const numeri = [];


// versione while 
while ( numeri.length !== 5 ) {

    const numero = parseFloat( prompt("inserisci un numero!") );

    if( !isNaN(numero)) {
        numeri.push(numero);
    }
    
};

console.log(numeri);

const [numeroA, numeroB, numeroC, numeroD, numeroE] = numeri;
console.log(numeroA, numeroB, numeroC, numeroD, numeroE);

const risultato = numeroA + numeroB + numeroC + numeroD + numeroE;
console.log(risultato);


// versione for 
// for ( let i = 0; i < 5; i++ ) {
//     const numero = parseFloat( prompt("inserisci un numero!") );

//     if( isNaN(numero)) {
//         alert("inserisci un numero valido!")
//         numero = parseFloat( prompt("inserisci un numero!") );
//     }

//     numeri.push(numero);
// }

// console.log(numeri);

// const [numeroA, numeroB, numeroC, numeroD, numeroE] = numeri;
// console.log(numeroA, numeroB, numeroC, numeroD, numeroE);

// const risultato = numeroA + numeroB + numeroC + numeroD + numeroE;
// console.log(risultato);