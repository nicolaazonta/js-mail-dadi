/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.*/



//creare un array con una lista di nomi inventati da noi
const guestList = ['MarioRossi@gmail.com' , 'AndreaRossi@gmail.com' , 'GianlucaRossi@gmail.com' , 'SaraRossi@gmail.com' , 'AliceRossi@gmail.com', 'SerenaRossi@gmail.com' , 'NicolaRossi@gmail.com'];

//chiedere all'utente la sua mail 
const guestNameEl = document.getElementById('guest_name');
const nameButtonEl = document.getElementById('name_button');
let writtenName;
nameButtonEl.addEventListener('click' , function (){
    //console.log(guestNameEl.value);
    writtenName = guestNameEl.value;
    //console.log(writtenName);

//verificare se l'utente è nella lista 
//stampare un messaggio sull'esito del controllo
    for (let i = 0 ; i < guestList.length ; i++) {
        //console.log(guestNameEl.value);
        const listName=guestList[i];
        //console.log(listName);
    
        if(listName === writtenName){
            document.querySelector('h2').innerHTML='Congrats, you are in the guest list';
        } else {
            document.querySelector('h2').innerHTML='Sorry, you are not in the guest list';
        }
    }
}
);








