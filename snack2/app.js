let parole = [];

while ( parole.length !== 2 ) {
    const parola = prompt("inserisci una parola");

    if (parola.length > 0) {
        parole.push(parola)
    }
    
}

const [parolaA, parolaB] = parole;

let maggiore = `${parolaA} ${parolaB}`;

if (parolaB.length > parolaA.length) {
    maggiore = `${parolaB} ${parolaA}`;
} else if (parolaA.length == parolaB.length) {
    maggiore = "le parole sono lunghe uguali"
};

console.log(maggiore);