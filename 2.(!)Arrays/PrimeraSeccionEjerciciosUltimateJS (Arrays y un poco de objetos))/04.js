// crear una funcion que me permita saber la cantidad de numeros positivos y negativos dentro de un array

let listOfNumbers = [-73, 13, -3, 16, 83, -6, 92, 34, 15, -25, 66];


//SOLUCIÓN 1
// function getAmountOfPositivesAndNegatives(inputArray) {
//     let AmountOfPositiveNumbers = 0;
//     let AmountOfNegativeNumbers = 0;
//     for (const number of inputArray) {
//         (number > 0) ? (AmountOfPositiveNumbers += 1) : (AmountOfNegativeNumbers += 1)
//     };
//     return { AmountOfNegativeNumbers, AmountOfPositiveNumbers };
// };



//SOLUCIÓN 2
function calculateAmountOfPositivesAndNegatives(inputArray) {
    let AmountOfPositiveNumbers = inputArray.filter((number) => number > 0);
    let AmountOfNegativeNumbers = inputArray.filter((number) => number < 0);
    return { AmountOfNegativeNumbers, AmountOfPositiveNumbers }
};


// // // // //
let result = calculateAmountOfPositivesAndNegatives(listOfNumbers);
console.log(result);