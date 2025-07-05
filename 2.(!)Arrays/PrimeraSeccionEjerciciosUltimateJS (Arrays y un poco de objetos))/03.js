// construir una funcion que nos devuelva el numero mayor y menor de un array numerico

let arrayExample = [234, -22, 98, 12, 0, -34, 65, -5, 45, 88]

function getMaxAndMinNumbers(inputArray) {
    let maxValue = Math.max(...inputArray);
    let minValue = Math.min(...inputArray);
    return { maxValue, minValue }
}

let result = getMaxAndMinNumbers(arrayExample);
console.log(result);