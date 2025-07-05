//Construir una función que me permita saber cuales propiedades de un objeto son metodos.

let literalObject = {
    name: 'Juanito',
    salute: () => { console.log(`Holaa`) },
    age: 25,
    login: () => { console.log(`login`) },
    logout: function () {
    }
}



function getMethodsFromObject(obj) {
    for (const key in obj) {
        ((typeof (obj[key])) === 'function') ? console.log(`La propiedad (${key}) SI es un METODO`) : console.log((`La propiedad (${key}) NO es un METODO`));
    }
}

getMethodsFromObject(literalObject);