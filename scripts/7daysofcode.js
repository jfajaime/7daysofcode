let alertQueue = [];
let isAlertVisible = false;

let nombre = prompt("Hola! cual es tu nombre");
let operacion = parseInt(prompt(`${nombre} te presento la calculadora: A continuacion elije 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir o 5 para salir`));
switch (operacion) {
    case 1:
        let num1 = parseInt(prompt("ingresa el primer numero"));
        let num2 = parseInt(prompt("ingresa el segundo numero"));
        let resultado = num1 + num2;
        queueAlert(`el resultado de la suma es ${resultado}`)
        break;
    case 2:
        let num3 = parseInt(prompt("ingresa el primer numero"));
        let num4 = parseInt(prompt("ingresa el segundo numero"));
        let resultado2 = num3 - num4;
        queueAlert(`el resultado de la resta es ${resultado2}`
        )
        break;
    case 3:
        let num5 = parseInt(prompt("ingresa el primer numero"));
        let num6 = parseInt(prompt("ingresa el segundo numero"));
        let resultado3 = num5 * num6;
        queueAlert(`el resultado de la multiplicacion es ${resultado3}`)
        break;
    case 4:
        let num7 = parseInt(prompt("ingresa el primer numero"));
        let num8 = parseInt(prompt("ingresa el segundo numero"));
        if (num7 < num8) {
            queueAlert("no se puede dividir entre cero")
        } else {
            let resultado4 = num7 / num8;
            queueAlert(`el resultado de la division es ${resultado4}`)
        }
        break;
    case 5:
        queueAlert("hasta luego")
        break;
    default:
        queueAlert("no se ha seleccionado ninguna opcion");
        break;
}
queueAlert("Fin del dia 7daysOfCode")

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
    }, 5000);
}