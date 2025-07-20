// crear una función que me permita saber cual es el mayor de los numeros de un array


let numbersList = [23, 45, 66, 192, 456, 233];

const getMaxNumber = (inputArray) => {
  return Math.max(...inputArray);
}

let maxNumber = getMaxNumber(numbersList);
console.log(maxNumber);