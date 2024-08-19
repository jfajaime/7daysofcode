let alertQueue = [];
let isAlertVisible = false;

let numeroUn = 1;
let stringUn = '1';
if (numeroUn == stringUn) {
    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
    queueAlert('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
    queueAlert('Las variables numeroUn y stringUn no tienen el mismo valor');
}

let numeroTreinta = 30;
let stringTreinta = '30';
if (numeroTreinta === stringTreinta) {
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
    queueAlert('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
    queueAlert('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

let numeroDiez = 10;
let stringDiez = '10';
if (numeroDiez == stringDiez) {
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
    queueAlert('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
    queueAlert('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}

// Aquí va el código JavaScript para el desafío del Día 1
queueAlert("Desafío Día 1 completado");

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

    setTimeout(() => {
        alertBox.remove();
        showNextAlert();
    }, 5000);
}
