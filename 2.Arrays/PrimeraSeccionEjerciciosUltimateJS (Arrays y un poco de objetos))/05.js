// crear una función que tome un array conformado por objetos y devuelva un array de pares(ver notas), cada array de ese ultimo debe tener un identificador y un objeto, el id debe extraerse del propio objeto original.
//Objeto original:
//let users = [
//     { id: 131, name: 'Nicolas' },
//     { id: 567, name: 'Ernesto' },
//     { id: 987, name: 'Carlos' },
//     { id: 764, name: 'Roberto' },
// ]
//
//
// Ejemplo de a lo que debemos llegar:
// let exampleOfPairArray = [
//     [131, { id: 131, name: 'Nicolas' }],
//     [567, { id: 567, name: 'Ernesto' }],
//     [987, { id: 987, name: 'Carlos' }],
//     [764, { id: 764, name: 'Roberto' }],
// ];




// Objeto original:
let users = [
    { id: 131, name: 'Nicolas' },
    { id: 567, name: 'Ernesto' },
    { id: 987, name: 'Carlos' },
    { id: 764, name: 'Roberto' },
]

//Solucion 1
// const createPairsArray = (inputArray) => {
//     let pairsArray = [];
//     for (const user of inputArray) {
//         let pairElement = [user.id, user];
//         pairsArray.push(pairElement);
//     }
//     return pairsArray;
// };
// let result = createPairsArray(users);
// console.log(result);


//Solucion 2

const createPairsArray = (inputArray) => {
    return inputArray.map((user) => [user.id, user]);
};

let result = createPairsArray(users);
console.log(result);










