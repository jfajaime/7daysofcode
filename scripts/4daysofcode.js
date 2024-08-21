let i = 0;
let numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log(numero);
while (i < 3) {
    let adivinarNumero = parseInt(prompt("Adivina el numero que estoy pensando del 1 al 10"))
    if (numero !== adivinarNumero&&i<2){
        i++
        alert(`Te quedan ${3 - i} intentos`)
    } else if  (numero === adivinarNumero) {
        i++
        alert(`!!!Excelente adivinaste en ${i} intentos`)
        // i = 3;
        break 
    }else{
    alert(`Usaste todos tus intentos, El numero secreto es  ${numero}`)
        break
}}
location.reload();