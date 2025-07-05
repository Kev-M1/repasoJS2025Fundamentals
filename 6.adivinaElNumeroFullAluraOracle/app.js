
let dynamicTextNode = document.getElementById('textoDinamico');
let numberInputNode = document.getElementById('numeroIngresado');
let tryButtonNode = document.getElementById('intentar');
let restartButtonNode = document.getElementById('reiniciar');
let secretNumber;
let userNumber;
let i;

function initialConditions() {
    i = 0;
    secretNumber = parseInt((Math.random() * 100) + 1);
    dynamicTextNode.textContent = `Ingrese un número entero entre 1 y 100`;
    numberInputNode.value = null;
    restartButtonNode.setAttribute('disabled', true);
    tryButtonNode.removeAttribute('disabled');
    numberInputNode.removeAttribute('disabled');
    console.log(secretNumber);
}

//Try-Button Event
tryButtonNode.addEventListener('click', () => {
    i += 1;
    userNumber = parseInt(numberInputNode.value);
    if (userNumber > 100 || userNumber <= 0) {
        dynamicTextNode.textContent = `ERROR!! Ingrese un número entero dentro del rango establecido (de 1 a 100) (Intentos: ${i})`;
    } else if (userNumber === secretNumber) {
        dynamicTextNode.textContent = ` Felicidades!! Adivinaste el número secreto (${secretNumber}) (Intentos: ${i})`;
        tryButtonNode.setAttribute('disabled', true);
        restartButtonNode.removeAttribute('disabled');
        numberInputNode.setAttribute('disabled', true);
    } else if (userNumber > secretNumber) {
        dynamicTextNode.textContent = ` Fallaste!! El número secreto es MENOR (Intentos: ${i})`;
    } else if (userNumber < secretNumber) {
        dynamicTextNode.textContent = ` Fallaste!! El número secreto es MAYOR (Intentos: ${i})`;
    }
    numberInputNode.value = null;
})

//Restart-Button Event
restartButtonNode.addEventListener('click', () => {
    initialConditions();
})



function main() {
    initialConditions();
}
main();