// crear una función que me permita saber cual es el mayor de los numeros de una lista


let numbersList = [23, 45, 66, 192, 456, 233];


function getMaxNumber(inputArray) {
    let result = Math.max(...inputArray);
    return result
}

console.log(getMaxNumber(numbersList));