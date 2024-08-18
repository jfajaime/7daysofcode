let nombre = prompt("¿Cual es tu nombre?");
let edad = parseInt(prompt(`${nombre} ¿Cuantos años tienes?`));
let lenguaje = prompt(`${nombre} tienes ${edad} añitos ¿que lenguaje de programacion estas estudiando?`);
console.log(`${nombre} tienes ${edad} añitos, y estas aprendiendo ${lenguaje}`);
let respuesta = prompt(`te gusta estudiar ${lenguaje}? Responde con el numero 1 para "Si" o 2 para "No"`);
if (respuesta == 1) {
    console.log(`${nombre} ¡Muy bien! Sigue estudiando y tendrás mucho éxito en ${lenguaje} `)
} else if (respuesta == 2) {
    console.log(`${nombre} Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`)
} else {
    console.log(`${nombre} no has respondido correctamente`)
};
