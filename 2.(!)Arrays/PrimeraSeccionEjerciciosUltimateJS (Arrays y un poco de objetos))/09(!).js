// Desarrollar una función que permita clasificar los elementos de un arreglo según sus tipos de datos. La función debe devolver un objeto que contenga las propiedades correspondientes a los tipos de datos presentes en el arreglo original, donde el valor de cada propiedad sea un arreglo con los elementos de ese tipo de dato.
// let originalArray = [
//   22,
//   'Hola Mundo',
//   'Chao Mundo',
//   ['array anidado'],
//   {},
// ]

let originalArray = [
  22,
  'Hola Mundo',
  'Chao Mundo',
  ['array anidado'],
  {},
];

function classifyAccordingToDataType(inputArray) {
  let stringsElements = [];
  let numbersElements = [];
  let objectsElements = [];
  let classificationObject = {};

  for (const element of inputArray) {
    if (typeof (element) === 'string') {
      stringsElements.push(element);
    }
    if (typeof (element) === 'number') {
      numbersElements.push(element);
    }
    if (typeof (element) === 'object') {
      objectsElements.push(element);
    }
  }
  classificationObject = { stringsElements, numbersElements, objectsElements };
  return classificationObject
}

let result = classifyAccordingToDataType(originalArray);
console.log(result);


