const userName = prompt('inserisci il tuo nome');
console.log(userName)
document.getElementById('user-name').innerHTML = userName;

const userSurname = prompt('inserisci il tuo cognome');
console.log(userSurname)
document.getElementById('user-surname').innerHTML = userSurname;

const userColor = prompt('inserisci il tuo colore preferito');
console.log(userColor)
document.getElementById('user-color').innerHTML = userColor;

const userAge = prompt('inserisci la tua età');
console.log(userAge)
document.getElementById('user-age').innerHTML = userAge;

let userPassword = userName + userSurname + userColor + userAge;
document.getElementById('user-password').innerHTML = userPassword;

