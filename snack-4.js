// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(tempo = 3000) {
  return function () {
    setTimeout(() => {
      console.log('Tempo scaduto!')
    }, tempo)
  }
}

let timer = creaTimer(1000)
timer()

let timer1 = creaTimer(2000)
timer1()

let timer2 = creaTimer(3000)
timer2()

let timer3 = creaTimer(4000)
timer3()

let timer4 = creaTimer(5000)
timer4()

let timer5 = creaTimer(6000)
timer5()

let timer6 = creaTimer(7000)
timer6()