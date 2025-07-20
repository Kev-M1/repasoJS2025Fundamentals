// crear una funcion que me permita saber la cantidad de numeros positivos y negativos dentro de un array

let listOfNumbers = [-73, 13, -3, 16, 83, -6, 92, 34, 15, -25, 66];


const getAmountOfPositiviesAndNegativesNumbers = (inputArray) => {
  let positiveNumbers = (inputArray.filter((number) => number > 0)).length;
  let negativeNumbers = (inputArray.filter((number) => number < 0)).length;
  return { positiveNumbers, negativeNumbers }
};

let result = getAmountOfPositiviesAndNegativesNumbers(listOfNumbers);
console.log(result);