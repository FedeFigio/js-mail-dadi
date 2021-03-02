var tuoiDadi = document.getElementById("tuoiDadi")
var dadoComputer = document.getElementById("dadoComputer")
var risultato = document.getElementById("risultato")
var inserisciNumero = prompt("Inserisci un numero per vincere")
var random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

dadoComputer.innerHTML = random
tuoiDadi.innerHTML = inserisciNumero

if (random < inserisciNumero) {
    risultato.innerHTML = "HAI VINTO"

} else {
    risultato.innerHTML = "HAI PERSO"
}