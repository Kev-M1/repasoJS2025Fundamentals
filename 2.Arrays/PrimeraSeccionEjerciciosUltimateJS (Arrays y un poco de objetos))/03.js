// construir una funcion que nos devuelva el numero mayor y menor de un array numerico

let arrayExample = [234, -22, 98, 12, 0, -34, 65, -5, 45, 88]

const getMaxAndMinValuesFromArray = (inputArray) => {
    let minValue = Math.min(...inputArray);
    let maxValue = Math.max(...inputArray);
    return { minValue, maxValue };
};

let limitValues = getMaxAndMinValuesFromArray(arrayExample);
console.log(limitValues);