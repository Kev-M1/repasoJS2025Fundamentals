
// Elaborar un programa que permita realizar el siguiente juego:
// El juego consiste en que el usuario ingrese un numero entre 0 y 100 intentando adivinar cual es el que hemos establecido como numero misterioso

// Cuando trabajamos con ciclos en JS la informacion que queramos mostrar en pantalla con print, document.write e incluso console.log solo se vera un vez finalice el ciclo
// Si queremos mostrar informacion de forma progresiva (entre iteraciones) debemos usar alerts

// NOTA: (USAR ALERTS!! PARA LAS SALIDAS)
// En JavaScript no es posible que un ciclo muestre información en tiempo real en el navegador a medida que se ingresan los registros. lo ideal seria que El usuario proporcionará el número de registros y la información se mostrará de forma progresiva, sin esperar a que termine el ciclo completo, osea que se interrumpa el ciclo por una pequeña porcion de tiempo solo para que se muestre en el navegador la informacion ingresada


//const secretNumber = Math.floor((Math.random() * 101)); 
//Forma mas sencilla de generar un número aleatorio entre 0 y 100 (Conteniendo a ambos limites)


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const secretNumber = getRandomInt(0, 100);
// console.log(secretNumber);


let userNumber;
let i = 1;
while (userNumber !== secretNumber) {
  userNumber = parseInt(prompt(`Ingrese un número entero entre 0 y 100`));

  if (userNumber > 100 || userNumber < 0 || isNaN(userNumber)) {
    alert(`ERROR, Ingrese un valor valido. (Número entero entre 0 y 100) (Intentos: ${i})`);
    continue;
  } else if (userNumber > secretNumber) {
    alert(`El número secreto es MENOR (Intentos: ${i})`);
  } else if (userNumber < secretNumber) {
    alert(`El número secreto es MAYOR (Intentos: ${i})`);
  } else if (userNumber === secretNumber) {
    alert(`Felicidades!!, Adivinaste el número secreto (Intentos: ${i})`);
  }
  i += 1;
}

