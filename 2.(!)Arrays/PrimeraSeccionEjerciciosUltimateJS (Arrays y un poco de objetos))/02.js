// construir una función que nos permita tomar un elemento de un array conociendo su índice

let arrayExample = [23, 92, 83, 54, 76];

function getElementByIndex(index, inputArray) {
    return (inputArray[index]);
}

let element = getElementByIndex(1, arrayExample);
console.log(element);