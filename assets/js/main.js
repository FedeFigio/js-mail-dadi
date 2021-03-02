var emailEl = document.getElementById("email");
var verificaEmailEl = document.getElementById("verificaEmail");
var containerEmail = ["pippo@hotmail.it", "pluto@gmail.com", "paperino@live.it", "minnie@yahoo.com"];
var inserisciEmail = prompt("Inserisci la tua email")

var flag = false;
for (let i = 0; i < containerEmail.length; i++) {
    if (containerEmail[i] == inserisciEmail) {
        flag = true;
    }
}

if (flag) {
    emailEl.innerHTML = inserisciEmail
    verificaEmailEl.innerHTML = "la emeil che hai inserito è presente"
} else {

    containerEmail.push(prompt("la email che hai inserito non e presente, vuoi aggiungerla?", inserisciEmail))
    emailEl.innerHTML = inserisciEmail
    verificaEmailEl.innerHTML = "la tua email e stata aggiunta correttamente"

}