/* 
CREAR UN PROGRAMA QUE ME PERMITA CALCULAR LA EDAD PROMEDIO DE LOS INTEGRANTES DE UNA FAMILIA CUALQUIERA

RECORDEMOS QUE UN PROMEDIO ES IGUAL A LA SUMA DE TODOS LOS DATOS INVOLUCRADOS SOBRE LA CANTIDAD DE LOS MISMOS (PROMEDIO = (SUMATORIA DE DATOS)/CANTIDAD DE DATOS)
*/

const numberOfMembers = parseInt(prompt(`Cuantas personas componen su núcleo familiar?`));


const calculateAverageAges = function (sumOfAges, numberOfMembers) {
    return (sumOfAges / numberOfMembers);
}

let i = 1;
let cumulativeAgeOfFamilyMembers = 0;
let randomFamilyMemberAge = 0
while (i <= numberOfMembers) {
    randomFamilyMemberAge = parseInt(prompt(`Ingrese la edad del familiar #${i}`));
    console.log(`Edad integrante #${i}: ${randomFamilyMemberAge}`);
    cumulativeAgeOfFamilyMembers = (cumulativeAgeOfFamilyMembers + randomFamilyMemberAge);
    i += 1;
};

let averageAges = calculateAverageAges(cumulativeAgeOfFamilyMembers, numberOfMembers);
console.log(`Cantidad de miembros de la familia: ${numberOfMembers}`);
console.log(`Edad promedio de los integrantes de la familia: ${averageAges} años`);






