// 🏆 Snack 1 Crea una funzione che somma due numeri.

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(a, b) {
    return a + b;
}

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
let result = function (a, b) {
    return a + b;
}

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
let somma = (a, b) => a + b;
