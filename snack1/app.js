const numeri = [];

while ( numeri.length !== 2 ) {

    const numero = parseFloat( prompt("inserisci un numero!") );

    if( !isNaN(numero)) {
        numeri.push(numero);
    }
    
};

console.log(numeri);

const [numeroA,numeroB] = numeri;
console.log(numeroA, numeroB);

if( numeroA >= numeroB) {
    console.log(numeroA);
} else {
    console.log(numeroB);
}

let maggiore = Math.max( ...numeri);
console.log(maggiore)