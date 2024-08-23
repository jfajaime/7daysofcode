let alertQueue = [];
let isAlertVisible = false;
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

function agregarProducto(producto, rubro) {
    if (listaSupermercado[rubro]) {
        listaSupermercado[rubro].push(producto);
        console.log(`Producto añadido: ${producto} en el rubro: ${rubro}`);
    } else {
        console.log(`Rubro no válido: ${rubro}`);
    }
}

function eliminarProducto(producto, rubro) {
    if (listaSupermercado[rubro]) {
        let index = listaSupermercado[rubro].indexOf(producto);
        if (index !== -1) {
            listaSupermercado[rubro].splice(index, 1);
            console.log(`Producto eliminado: ${producto} del rubro: ${nombresRubros[rubro]}`);
        } else {
            console.log(`Producto no encontrado en el rubro: ${nombresRubros[rubro]}`);
        }
    } else {
        console.log(`Rubro no válido: ${rubro}`);
    }
}

function mostrarLista() {

    let listaCompleta = '';
    for (let rubro in listaSupermercado) {
        listaCompleta += `${nombresRubros[rubro]}\n`;
        listaCompleta += listaSupermercado[rubro].join('\n') + '\n';
    }
    console.log(listaCompleta);
    queueAlert("Lista de Supermercado");
    queueAlert(listaCompleta);

}

while (true) {
    let producto = prompt("Ingresa un producto o escribe 'salir' para terminar o 'eliminar' para sacar un producto de tu lista");
    if (producto.toLowerCase() == 'salir' || producto === "") {
        break;
    } else if (producto.toLowerCase() == 'eliminar') {
        let productoEliminar = prompt("Ingresa el producto que deseas eliminar");
        let rubroEliminar = prompt(`Ingresa el rubro para ${productoEliminar} (Frutas y Verduras=1, Lácteos=2, Panadería=3, Carnes=4, Bebidas=5)`);
        eliminarProducto(productoEliminar, rubroEliminar);
    } else {
        let rubro = prompt(`Ingresa el rubro para ${producto} (Frutas y Verduras=1, Lácteos=2, Panadería=3, Carnes=4, Bebidas=5)`);
        agregarProducto(producto, rubro);
    }
}

mostrarLista();
queueAlert("Desafío Día 6 completado");

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
