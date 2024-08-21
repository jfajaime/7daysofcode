let alertQueue = [];
let isAlertVisible = false;

let nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt(`${nombre}, ¿cuántos años tienes?`));
let lenguaje = prompt(`${nombre}, tienes ${edad} añitos. ¿Qué lenguaje de programación estás estudiando?`);

console.log(`Hola ${nombre}, tienes ${edad} añitos, y estás aprendiendo ${lenguaje}`);
queueAlert(`Hola ${nombre}, tienes ${edad} añitos, y estás aprendiendo ${lenguaje}`);

let respuesta = prompt(`${nombre}, ¿te gusta estudiar ${lenguaje}? Responde con el número 1 para "Sí" o 2 para "No"`);
if (respuesta == 1) {
    console.log(`${nombre}, ¡muy bien! Sigue estudiando y tendrás mucho éxito en ${lenguaje}`);
    queueAlert(`${nombre}, ¡muy bien! Sigue estudiando y tendrás mucho éxito en ${lenguaje}`);
} else if (respuesta == 2) {
    console.log(`${nombre}, oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`);
    queueAlert(`${nombre}, oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`);
} else {
    console.log(`${nombre}, no has respondido correctamente`);
    queueAlert(`${nombre}, no has respondido correctamente`);
}

// Aquí va el código JavaScript para el desafío del Día 2
queueAlert("Desafío Día 2 completado");

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
    alertBox.className = 'alert';
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
    }, 5000);
}
