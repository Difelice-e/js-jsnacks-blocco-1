// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

const nameInvitati = ["Gianni Morandi", "Obama", "Vladimir Putin", "Tom Holland"];
console.log(nameInvitati);

const userName = prompt("inserisci il tuo nome");

let invitato = false;
for ( let i = 0; i < nameInvitati.length; i++ ) {
    if (nameInvitati[i] == userName) {
        invitato = true;
        break
    }
};

if (invitato == true) {
    console.log("il tuo nome è in lista! entra pure.");
} else {
    console.log("il tuo nome non è in lista, non puoi entrare!")
};

