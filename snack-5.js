// 🏆 Snack 5 // Crea una funzione stampaOgniSecondo con setInterval

// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function print(messaggio = "Ciao!") {

    return setInterval(() => {
        console.log(messaggio);
    }, 1000);
}

// Crear dos intervalos
let idPrint1 = print('Buongiorno!');
let idPrint2 = print('Buonasera!');


//interrompere manualmente  dopo un tempo
// clearInterval(idPrint1);
// clearInterval(idPrint2);