/* 
Problema: un carro tiene un tanque de 40 litros. Usando gasolina y consumiendo todo el tanque se hace un recorrido de 480 kilómetros. 
¿Cuál es la eficiencia del carro usando gasolina? o sea, ¿cuántos kilómetros recorre el carro por cada litro de gasolina? Para calcular la eficiencia: 
divide la distancia recorrida entre la cantidad de litros gastados. Imprime el valor utilizando document.write. Organiza las cuentas en variables.

Por otro lado, si el carro usa alcohol como combustible, el mismo tanque de 40 litros hace un recorrido de 300 kilómetros. ¿Cuál es el la eficiencia del carro usando alcohol? 
 */




function calculateEfficiency(distanceTraveled, fuelUsed) {
  return (distanceTraveled / fuelUsed);
}

const totalTankCapacity = 40;
let fullTankOfGasoline = 40;
let distanceTraveledUsingGasoline = 480;
let distanceTraveledUsingAlcohol = 300;
let fullTankOfAlcohol = 40;

let efficiencyUsingGasoline = calculateEfficiency(distanceTraveledUsingGasoline, fullTankOfGasoline);
let efficiencyUsingAlcohol = calculateEfficiency(distanceTraveledUsingAlcohol, fullTankOfAlcohol);

console.log(`La eficiencia del motor usando gasolina es de: ${efficiencyUsingGasoline}Km/L`);
console.log("La eficiencia del motor usando gasolina es de: " + efficiencyUsingGasoline + "Km/L");
console.log(`La eficiencia del motor usando alcohol es de: ${efficiencyUsingAlcohol}Km/L`);