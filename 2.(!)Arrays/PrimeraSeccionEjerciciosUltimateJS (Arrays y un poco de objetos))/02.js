// construir una función que nos permita tomar un elemento de un array conociendo su índice

let arrayExample = [23, 92, 83, 54, 76];


const getElementFromArrayByIndex = (inputArray, index) => {
    return (inputArray[index])
};

let element = getElementFromArrayByIndex(arrayExample, 1)
console.log(element);