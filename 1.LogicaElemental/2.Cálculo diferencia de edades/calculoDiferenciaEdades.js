/* 
Cuántos años de diferencia tienes con tu hermano? Escribe un programa que muestre el mensaje ¨Nuestra diferencia de edad es x Años¨.
 */


const calculateAgeDifference = function (olderAge, youngerAge) {
    return (olderAge - youngerAge);
}

let olderBrotherAge = parseFloat(prompt(`Ingrese la edad del hermano mayor`));
let youngerBrotherAge = parseFloat(prompt(`Ingrese la edad del hermano menor`));
let ageDifference = calculateAgeDifference(olderBrotherAge, youngerBrotherAge)

console.log(`Edad hermano mayor: ${olderBrotherAge}`);
console.log(`Edad hermano menor: ${youngerBrotherAge}`);
console.log(`La diferencia de edad entre los hermanos es de ${ageDifference} años`); 120