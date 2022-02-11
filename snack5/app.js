// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire 
// un numero, se è dispari inseriscilo nell’array

const numeri = [];

for ( i = 0; i < 6; i++) {

    const numero = parseFloat( prompt("inserisci un numero!") );
    
    if( !isNaN(numero) && numero % 2 != 0) {
        numeri.push(numero);
    }
};

console.log(numeri);