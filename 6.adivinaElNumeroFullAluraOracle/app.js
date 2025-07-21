let secretNumber = null;
let dinamicText = document.querySelector('#textoDinamico');
let inputNumber = document.querySelector('#numeroIngresado');
let tryButton = document.querySelector('#intentar');
let restartButton = document.querySelector('#reiniciar');
let attemptAccumulator;



const generateSecretNumber = () => {
  return Math.floor(Math.random() * 101);
};

const initialConditions = () => {
  secretNumber = generateSecretNumber();
  dinamicText.textContent = `Ingrese un número entero entre 0 y 100`;
  inputNumber.value = ``;
  inputNumber.focus();
  attemptAccumulator = 0;
};

//Events
tryButton.addEventListener('click', (event) => {
  let enteredNumber = parseInt(inputNumber.value);
  inputNumber.value = ``;
  inputNumber.focus();

  if (enteredNumber < 0 || enteredNumber > 100 || isNaN(enteredNumber)) {
    dinamicText.textContent = `ERROR!, Ingrese un valor válido (Número entero entre 0 y 100)`;
  } else {
    attemptAccumulator += 1;

    if (enteredNumber > secretNumber) {
      dinamicText.textContent = `El número secreto es MENOR (Intentos: ${attemptAccumulator})`;
    } else if (enteredNumber < secretNumber) {
      dinamicText.textContent = `El número secreto es MAYOR (Intentos: ${attemptAccumulator})`;
    } else if (enteredNumber === secretNumber) {
      dinamicText.textContent = `Felicidades!! Adivinaste el número secreto! (${secretNumber}) (Intentos: ${attemptAccumulator})`;
      restartButton.removeAttribute('disabled');
      tryButton.setAttribute('disabled', true);
    }
  }
})

restartButton.addEventListener('click', (event) => {
  restartButton.setAttribute('disabled', true);
  tryButton.removeAttribute('disabled');
  initialConditions();
})



const main = () => {
  initialConditions();
  // console.log(secretNumber);
};
main();