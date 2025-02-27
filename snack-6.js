// 🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.



function creaContatoreAutomatico(tempo = 1000) {
    let n = 0;
  
    return () => {
        let idSetInterval = setInterval (() => { console.log (n += 1) }, tempo);
        return idSetInterval
    }
    
}

let test  = creaContatoreAutomatico(1000)()