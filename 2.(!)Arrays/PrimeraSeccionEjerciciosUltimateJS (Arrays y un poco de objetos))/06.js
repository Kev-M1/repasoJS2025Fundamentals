// crear un algoritmo que tome un array de pares y devuelva un array de objetos, basicamente realizar el ejercicio anterior a la inversa


let pairsArray = [
    [131, { id: 131, name: 'Nicolas' }],
    [567, { id: 567, name: 'Ernesto' }],
    [987, { id: 987, name: 'Carlos' }],
    [764, { id: 764, name: 'Roberto' }],
];
console.log({ pairsArray });
let pairsArrayCopy = [...pairsArray];

function createNewArray(inputArray) {
    let newArray = [];
    newArray = inputArray.map((pairElement) => pairElement.slice(1));
    return newArray;
}

let result = createNewArray(pairsArrayCopy);
console.log({ result });

