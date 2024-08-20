let alertQueue = [];
let isAlertVisible = false;

let nombre = prompt("¿Cuál es tu nombre?");
let estudio = parseInt(prompt(`Hola ${nombre}, ¿qué te gustaría estudiar? 1 si es Front-End o 2 si es Back-End`));
let front = "";
let back = "";
let mensaje1 = "es un framework muy popular y demandado en el mercado laboral, te recomiendo que te pongas en contacto con un mentor para que te guíe en tu camino profesional.";
let mensaje2 = "es un lenguaje muy demandado en el mercado laboral, te recomiendo que te pongas en contacto con un mentor para que te guíe en tu camino profesional.";
let salir = false;

while (!salir) {
    if (estudio === 1) {
        queueAlert(`¡Genial! Te gusta estudiar Front-End, es un área muy interesante, te recomiendo que te pongas en contacto con un mentor para que te guíe en tu camino profesional.`);
        
        front = parseInt(prompt(`Dentro de Front-End tienes dos lenguajes muy demandados: (React y Vue). ¿Cuál te gustaría aprender? Elige 1 o 2 respectivamente`));

        if (front === 1) {
            queueAlert(`¡Excelente elección ${nombre}! React ${mensaje1}`);
        } else if (front === 2) {
            queueAlert(`¡Excelente elección ${nombre}! Vue ${mensaje1}`);
        }
        salir = true;
    } else if (estudio === 2) {
        queueAlert(`¡Excelente elección ${nombre}! Te gusta estudiar Back-End, es un área muy interesante y muy demandada en el mercado laboral, te recomiendo que te pongas en contacto con un mentor para que te guíe en tu camino profesional.`);
        
        back = parseInt(prompt(`Dentro de Back-End tienes dos lenguajes muy demandados: (C# o Java). ¿Cuál te gustaría aprender? Elige 1 o 2 respectivamente.`));

        if (back === 1) {
            queueAlert(`¡Excelente elección ${nombre}! C# ${mensaje2}`);
        } else if (back === 2) {
            queueAlert(`¡Excelente elección ${nombre}! Java ${mensaje2}`);
        }
        salir = true;
    } else {
        queueAlert("Opción inválida");
        estudio = parseInt(prompt(`Hola ${nombre}, ¿qué te gustaría estudiar? 1 si es Front-End o 2 si es Back-End`));
    }
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

    setTimeout(() => {
        alertBox.remove();
        isAlertVisible = false;
        showNextAlert();
    }, 6000);
}