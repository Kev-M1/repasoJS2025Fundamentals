/* 
En este ejercicio vamos a desarollar una calculadora basica que permita a cualquier usuario (INTERACCION) calcular su IMC, 
recordemos que el IMC (INDICE DE MASA CORPORAL) = PESO/ALTURA^2 

A PARTIR DE AQUI AÑADIMOS TEMAS DEL CURSO #2

AHORA VAMOS A MEJORAR NUESTRO PROGRAMA, VAMOS A AÑADIR LA FUNCIONALIDAD DE QUE SEGUN EL IMC DEL USUARIO ESTE LE DIGA EN QUE RANGO SALUBRE SE ENCUENTRA
SEGUN LA CLASIFICACION ESTABLECIDA POR LA TABLA DE LA OMS (LA IMAGEN SE ENCUENTRA ADJUNTA EN LA CARPETA RAIZ DEL PROYECTO)
*/

function calculateUserIMC(weight, height) {
    return (weight / (height ** 2));
}

const userName = prompt(`Hola, cual es tu nombre?`)
const userWeight = parseFloat(prompt(`${userName}, Ingrese su peso`));
const userHeight = parseFloat(prompt(`Ahora ingresa tu altura`));
let userIMC = calculateUserIMC(userWeight, userHeight);
let imcClasification = null;

if (userIMC < 18.5) {
    imcClasification = 'Insuficiencia ponderal';
} else if (userIMC >= 18.5 && userIMC <= 24.9) {
    imcClasification = 'Intervalo normal';
} else if (userIMC >= 25) {
    imcClasification = 'Sobrepeso';
}

//Información en pantalla
console.log(`Datos del Usuario`);
console.log(`Nombre: ${userName}`);
console.log(`Peso: ${userWeight}`);
console.log(`Altura: ${userHeight}`);
console.log(`IMC: ${userIMC}Kg/m`);
console.log(`Clasificación según OMS: ${imcClasification}`);