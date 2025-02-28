// 🎯 Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.


function contoAllaRovescia(n = 10){

    let idCounter = setInterval( () => {
         console.log ('Tempo rimanente', n -= 1)
         if ( n === 0 ){
             clearInterval(idCounter)
             console.log("Tempo scaduto!")
         }
     }, 1000 )
 }