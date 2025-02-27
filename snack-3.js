// 🏆 Snack 3  Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

function eseguiOperazione(a, b, operazione) {
    return operazione(a, b);
}

let somma = (a, b) => a + b;
let moltiplicazione = (a, b) => a * b;
let divisione = (a, b) => a / b;