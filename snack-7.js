// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio = 'Ciao!', avvio = 3000, stop = 5000) {
    setTimeout(() => {
        let idPlay = setInterval( () => { console.log(messaggio) }, 1000 );
        setTimeout( () => { clearInterval(idPlay) }, stop )
    }, avvio)
}

eseguiEferma('Cri!', 3000, 5000)