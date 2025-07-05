// Crear una Función que devuelva los valores absolutos de una lista de numeros (almacenados en un Array)
//let listOfNumbers = [23, -25, -3, -1, 33, -8, -123123];

let listOfNumbers = [23, -25, -3, -1, 33, -8, -123123];
console.log(listOfNumbers);

function getAbsValuesOfArray(inputArray) {
  let absValuesArray = [];
  absValuesArray = inputArray.map((number) => Math.abs(number));
  return absValuesArray;
}

let result = getAbsValuesOfArray(listOfNumbers);
console.log(result);
