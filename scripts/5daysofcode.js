let alertQueue = [];
let isAlertVisible = false;



// Crear una matriz de supermercado con rubros predefinidos
let listaSupermercado = {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": []
};
let nombresRubros = {
    "1": "Frutas y Verduras",
    "2": "Lácteos",
    "3": "Panadería",
    "4": "Carnes",
    "5": "Bebidas"
};

// Función para añadir productos a la lista en el rubro seleccionado
function agregarProducto(producto, rubro) {
    if (listaSupermercado[rubro]) {
        listaSupermercado[rubro].push(producto);
        // queueAlert(`Producto añadido: ${producto} en el rubro: ${rubro}`);
    } else {
        queueAlert(`Rubro no válido: ${rubro}`);
    }
}

// Función para mostrar la lista completa
function mostrarLista() {
    
    let listaCompleta = '';
    for (let rubro in listaSupermercado) {
        listaCompleta += `${nombresRubros[rubro]}\n`;
        listaCompleta += listaSupermercado[rubro].join('\n') + '\n';
        }
        console.log(listaCompleta)
    queueAlert("Lista de Supermercado");
    queueAlert(listaCompleta);
    
}

// Solicitar productos y rubros al usuario hasta que decida parar
while (true) {
    let producto = prompt("Ingresa un producto (o escribe 'salir' para terminar):");
    if (producto.toLowerCase() == 'salir'|| producto==="") {
        break;
    }
    let rubro = prompt(`Ingresa el rubro para ${producto} (Frutas y Verduras=1, Lácteos=2, Panadería=3, Carnes=4, Bebidas=5):`);
    agregarProducto(producto, rubro);
}

// Mostrar la lista final
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
