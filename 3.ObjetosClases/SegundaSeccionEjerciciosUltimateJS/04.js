//Construir una función que permita saber si X propiedad existe en un objeto

let literalObject = {
    name: 'Juan',
    age: 35,
    isActive: true,
    location: 'Medellin',
}




const checkIfPropertyExistsInObject = (obj, propertyToCheck) => {
    const propertyExistInObject = obj.hasOwnProperty(propertyToCheck)
    return propertyExistInObject
};

const checkProperty = checkIfPropertyExistsInObject(literalObject, 'isActive')
console.log(checkProperty);