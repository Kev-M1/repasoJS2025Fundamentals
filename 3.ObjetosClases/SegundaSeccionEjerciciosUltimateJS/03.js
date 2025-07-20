//Construir una función que me permita saber cuales propiedades de un objeto son metodos.

let literalObject = {
    name: 'Juanito',
    salute: () => { console.log(`Holaa`) },
    age: 25,
    login: () => { console.log(`login`) },
    logout: function () {
    }
}



const getMethodsFromObject = (obj1) => {
    for (const key in obj1) {
        if (typeof (obj1[key]) == 'function') {
            console.log(`Esta propiedad es un método. ${key}`);
        }
    }
};

getMethodsFromObject(literalObject);