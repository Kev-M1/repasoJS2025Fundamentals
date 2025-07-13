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
//

const classifyAccordingToDataType = (inputArray) => {
  let dataType;
  let classificationObject = {};
  let numberValues = [];
  let stringValues = [];
  let objectValues = [];
  for (let i = 0; i < inputArray.length; i++) {
    dataType = typeof (inputArray[i])
    if (dataType == 'number') {
      numberValues.push(inputArray[i]);
    } else if (dataType == 'string') {
      stringValues.push(inputArray[i]);
    } else if (dataType == 'object') {
      objectValues.push(inputArray[i]);
    }
  }
  classificationObject = { numbers: numberValues, strings: stringValues, objects: objectValues }
  return classificationObject
};

let result = classifyAccordingToDataType(originalArray)
console.log(result);


