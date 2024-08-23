let alertQueue = [];
let isAlertVisible = false;

let frutas = [];
let lacteos = [];
let carnes = [];
let verduras = [];
let producto = "";
let categoria = "";

let continuar = true;

function isValidCategory(category) {
    return [1, 2, 3, 4].includes(category);
}



function agregarProducto() {
    producto = prompt("¿Qué producto deseas agregar?");
    categoria = parseInt(prompt("¿De qué categoría es el producto? frutas:1 ; lacteos:2 ; carnes:3 ; verduras:4"));


    switch (categoria) {
        case 1:
            frutas.push(producto);
            break;
        case 2:
            lacteos.push(producto);
            break;
        case 3:
            carnes.push(producto);
            break;
        case 4:
            verduras.push(producto);
            break;
        default:
            queueAlert("Categoría no válida");break
    }

}


function mostrarLista() {
    queueAlert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Carnes: ${carnes}\n  Verduras: ${verduras}`);
    console.log(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Carnes: ${carnes}\n  Verduras: ${verduras}`);
}

while (continuar) {
    let respuesta = prompt("¿Deseas agregar un producto a la lista de compras? Responde 'sí' o 'no'.");
    console.log(respuesta)

    if (respuesta === "1") {
        agregarProducto();
    } else {
        continuar = false;
    }
}

mostrarLista();
queueAlert("Desafío Día 5 completado");

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

