//Construir una función que permita saber si X propiedad existe en un objeto

let literalObject = {
    name: 'Juan',
    age: 35,
    isActive: true,
    location: 'Medellin',
}



function searchProperty(obj1, property) {
    let propertyExistence = (obj1.hasOwnProperty(property));
    return propertyExistence;
}

let result = searchProperty(literalObject, `name`);
console.log(result);


