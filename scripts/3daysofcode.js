let alertQueue = [];
let isAlertVisible = false;

let nombre = prompt("¿Cuál es tu nombre?");
let estudio = parseInt(prompt(`Hola ${nombre}, ¿qué te gustaría estudiar? 1 si es Front-End o 2 si es Back-End`));
let front = "";
let back = "";
let mensaje1 = "es un framework muy popular y demandado en el mercado laboral, te recomiendo que te pongas en contacto con un mentor para que te guíe en tu camino profesional.";
let mensaje2 = "es un lenguaje muy demandado en el mercado laboral, te recomiendo que te pongas en contacto con un mentor para que te guíe en tu camino profesional.";
let salir = false;


if (estudio === 1) {
    queueAlert(`¡Genial! Te gusta estudiar Front-End, es un área muy interesante.`);

    front = parseInt(prompt(`Dentro de Front-End tienes dos lenguajes muy demandados: (React y Vue). ¿Cuál te gustaría aprender? Elige 1 o 2 respectivamente`));

    if (front === 1) {
        queueAlert(`¡Excelente elección ${nombre}! React ${mensaje1}`);
    } else if (front === 2) {
        queueAlert(`¡Excelente elección ${nombre}! Vue ${mensaje1}`);
    } else { `No ingresaste una opcion valida` }

} else if (estudio === 2) {
    queueAlert(`¡Excelente elección ${nombre}! Te gusta estudiar Back-End, es un área muy interesante y muy demandada en el mercado laboral`);

    back = parseInt(prompt(`Dentro de Back-End tienes dos lenguajes muy demandados: (C# o Java). ¿Cuál te gustaría aprender? Elige 1 o 2 respectivamente.`));

    if (back === 1) {
        queueAlert(`¡Excelente elección ${nombre}! C# ${mensaje2}`);
    } else if (back === 2) {
        queueAlert(`¡Excelente elección ${nombre}! Java ${mensaje2}`);
    } else { `No ingresaste una opcion valida` }

} else {
    queueAlert("Opción inválida");
    estudio = parseInt(prompt(`Hola ${nombre}, ¿qué te gustaría estudiar? 1 si es Front-End o 2 si es Back-End`));
}

const fullstackOEspecial = prompt("Escribe 1 para especializarte o 2 para desarrollarte como Full-Stack");

if (fullstackOEspecial == 1) {
    if (estudio === 1 && front === 1) {
        alertQueue.push("¡Genial! serás todo un experto en REACT..!!!");
        
    } else if(estudio === 1 && front === 2){
        alertQueue.push("¡Genial! serás todo un experto en VUE..!!!");
        
    }
    if (estudio === 2 && back === 1) {
        alertQueue.push("¡Genial! serás todo un experto en C#..!!!");
        
    } else if(estudio === 2 && back === 2){
        alertQueue.push("¡Genial! serás todo un experto en JAVA..!!!");
        
    }
} else if (fullstackOEspecial == 2) {
    if (estudio === 1 && front === 1) {
        alertQueue.push("¡Genial! es hora de aprender otro lenguaje además de REACT para desarrollarte como Full-Stack");

    } else if (estudio === 1 && front === 2) {
        alertQueue.push("¡Genial! es hora de aprender otro lenguaje además de VUE para desarrollarte como Full-Stack");        
    }
    if (estudio === 2 && back === 1) {
        alertQueue.push("¡Genial! es hora de aprender otro lenguaje además de C# para desarrollarte como Full-Stack");
        
    } else if (estudio === 2 && back === 2){
        alertQueue.push("¡Genial! es hora de aprender otro lenguaje además de JAVA para desarrollarte como Full-Stack");        
    }
    else{
        alertQueue.push("¡No ingresaste un valor válido!");
    }
}

let aprender=prompt("¿Quieres aprender una nueva tecnologia? escribe ´´si´´ para continuar");
while (aprender==="si") {
    let nuevoLenguaje=prompt("¿Que lenguaje te gustaria aprender?");
    alertQueue.push(`¡Genial! ${nombre} vas a aprender ${nuevoLenguaje}`);
    aprender=prompt("¿Quieres aprender una nueva tecnologia? escribe ´´si´´ para continuar");
}





// Aquí va el código JavaScript para el desafío del Día 3
queueAlert("Desafío Día 3 completado");
function queueAlert(message) {
    alertQueue.push(message);
    if (!isAlertVisible) {
        showNextAlert();
    }
}

function showNextAlert() {
    if (alertQueue.length > 0) {
        isAlertVisible = true;
        const message = alertQueue.shift();
        showAlert(message);
    } else {
        isAlertVisible = false;
    }
}

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'queueAlert';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    // Agregar evento de clic para cerrar la alerta
    alertBox.addEventListener('click', () => {
        alertBox.remove();
        isAlertVisible = false;
        showNextAlert();
    });

    setTimeout(() => {
        alertBox.remove();
        isAlertVisible = false;
        showNextAlert();
    }, 6000);
    
}
setTimeout(() => {
    location.reload();
}, 15000);