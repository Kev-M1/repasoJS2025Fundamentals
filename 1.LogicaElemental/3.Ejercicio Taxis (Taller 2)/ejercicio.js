/*
En un lavadero de vehículos se relacionan al final del día la cantidad de taxis que se lavaron, la cantidad de buses, la cantidad de particulares y la cantidad de motos.
Se desea un programa que muestre el dinero realizado por cada tipo de vehículo (taxis, buses, particulares y motos) y el total realizado en el lavadero. 
El precio de lavado de los taxis es de $3.000, el de los buses a $10.000, de los particulares $5.000 y de las motos a $2.000.
 */


function calculateTotalWashedVehicules(taxis, buses, particulars, motorcycles) {
    return (taxis + buses + particulars + motorcycles);
}

function calculeteGeneratedMoneyByAmountOfWashedVehicules(amountOfWashedVehicule, price) {
    return (amountOfWashedVehicule * price);
}

function calculateGrossIncomes(taxisIncomes, busesIncomes, privateCarsIncomes, motorcylcesIncomes) {
    return (taxisIncomes + busesIncomes + privateCarsIncomes + motorcylcesIncomes)
}

//Precios de lavado (en COP$)
let taxisWashingPrice = 3000;
let busesWashingPrice = 10000;
let privateCarsWashingPrice = 5000;
let motorcyclesWashingPrice = 2000;

// Vehiculos lavados (por dia)
let taxisWashed = parseInt(prompt(`Ingrese la cantidad de TAXIS lavados el dia de hoy`));
let busesWashed = parseInt(prompt(`Ingrese la cantidad de BUSES lavados el dia de hoy`));
let privateCarsWashed = parseInt(prompt(`Ingrese la cantidad de CARROS PARTICULARES lavados el dia de hoy`));
let motorcyclesWashed = parseInt(prompt(`Ingrese la cantidad de MOTOS lavadas el dia de hoy`));
let totalWashedVehicules = calculateTotalWashedVehicules(taxisWashed, busesWashed, privateCarsWashed, motorcyclesWashed);


// Ingresos generados por vehiculo y total
let incomeGeneratedByTaxis = calculeteGeneratedMoneyByAmountOfWashedVehicules(taxisWashed, taxisWashingPrice);
let incomeGeneratedByBuses = calculeteGeneratedMoneyByAmountOfWashedVehicules(busesWashed, busesWashingPrice);
let incomeGeneratedByPrivateCars = calculeteGeneratedMoneyByAmountOfWashedVehicules(privateCarsWashed, privateCarsWashingPrice);
let incomeGeneratedByMotorcycles = calculeteGeneratedMoneyByAmountOfWashedVehicules(motorcyclesWashed, motorcyclesWashingPrice);
let grossIncomes = calculateGrossIncomes(incomeGeneratedByTaxis, incomeGeneratedByBuses, incomeGeneratedByPrivateCars, incomeGeneratedByMotorcycles)


// INFORMACIÓN EN PANTALLA
console.log(`Cantidad de Vehiculos lavados LAVADERO S.A.S`);
console.log(`Taxis lavados: ${taxisWashed}`);
console.log(`Buses lavados: ${busesWashed}`);
console.log(`Carros particulares lavados: ${privateCarsWashed}`);
console.log(`Motos lavadas: ${motorcyclesWashed}`);
console.log(`Total de Vehiculos lavados: ${totalWashedVehicules}`);
console.log(``);
console.log(`Ingresos Generados`);
console.log(`Dinero generado por lavado de Taxis: ${incomeGeneratedByTaxis}$`);
console.log(`Dinero generado por lavado de Buses: ${incomeGeneratedByBuses}$`);
console.log(`Dinero generado por lavado de Carros particulares: ${incomeGeneratedByPrivateCars}$`);
console.log(`Dinero generado por lavado de Motos: ${incomeGeneratedByMotorcycles}$`);
console.log(`Ingresos brutos totales: ${grossIncomes}$`);
