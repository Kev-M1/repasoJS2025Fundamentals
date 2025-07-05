/* 
Una empresa transportadora desea sistematizar la liquidación diaria de sus N vehículos, para ello, crea el siguiente registro por cada uno de ellos: 
REGISTRO
1. Placa 
2. Propietario 
3. Tipo de vehículo (1=colectivo, 2=microbús, 3=buseta, 4=bus) 
4. Número de pasajeros transportados 
5. Valor de cada pasaje. 


Costo de los pasajes:
- Colectivos: $3500
- Microbús: $3000
- Buseta: $2500
- Bus: $2200

El administrador desea saber: 
1. Total recolectado por la empresa. 
2. Cuantos de los colectivos transportaron más de 100 pasajeros. 
3. Promedio de pasajeros transportados por los microbuses. 
4. Cuánto dinero recolectaron en total los buses. 
5. Porcentaje que representan las busetas respecto a todo el parque automotor de la empresa  
*/


const calculateRecolectedMoney = function (tickectCost, numberOfPassengersTransported) {
  return (tickectCost * numberOfPassengersTransported)
}

const calculateDriverPayment = function (recolectedMoney) {
  return (recolectedMoney * (20 / 100))
}

const calculateAverageMicrobusTransportedPassangers = function (totalMicrobusesTransportedPeople, totalMicrobuses) {
  return (totalMicrobusesTransportedPeople / totalMicrobuses)
}

const calculatePercentageOfBusetas = function (busetasAcum, totalNumberOfCars) {
  return ((busetasAcum * 100) / totalNumberOfCars);
}

let driverName;
let vehiculePlate;
let typeOfVehicule;
let numberOfPassengersTransported;
let tickectCost;
let recolectedMoney;
let driverPayment;
let recordsStatus;
let i = 1;

//Variables para responder los literales
let totalMoneyCollectedAcum = 0;
let colectivosTransportedMoreThan100Passengers = 0;
let totalMicrobuses = 0;
let microbusNumberOfPassengersAcum = 0;
let busesMoneyGeneratedAcum = 0;
let numberOfBusetasRecordsAcum = 0;


//Precios pasajes
const colectivoTickectCost = 3500;
const microbusTickectCost = 3000;
const busetaTickectCost = 2500;
const busTickectCost = 2200;


recordsStatus = prompt(`Desea ingresar un nuevo registro?`).toLocaleLowerCase();
//El cilco muestra información progresivamente pero solo despues de recargar la pagina minimo una vez
while (recordsStatus == 's' || recordsStatus == 'si') {
  driverName = prompt(`Ingrese el nombre del conductor`);
  vehiculePlate = prompt(`Ingrese el número de placa del vehiculo`);
  numberOfPassengersTransported = parseInt(prompt(`Ingrese cuantos pasajeros transporto durante la jornada?`));
  typeOfVehicule = prompt('Que tipo de vehiculo maneja el conductor? (1=colectivo, 2=microbús, 3=buseta, 4=bus)');

  switch (typeOfVehicule) {
    case '1':
      typeOfVehicule = 'Colectivo';
      tickectCost = colectivoTickectCost;
      if (numberOfPassengersTransported > 100) {
        (colectivosTransportedMoreThan100Passengers += 1);
      }
      break;
    case '2':
      typeOfVehicule = 'Microbús';
      tickectCost = microbusTickectCost;
      microbusNumberOfPassengersAcum = (microbusNumberOfPassengersAcum + numberOfPassengersTransported);
      totalMicrobuses += 1;
      break;
    case '3':
      typeOfVehicule = 'Buseta';
      tickectCost = busetaTickectCost;
      numberOfBusetasRecordsAcum += 1;
      break;
    case '4':
      typeOfVehicule = 'Bus';
      tickectCost = busTickectCost;
      break;
  }

  recolectedMoney = calculateRecolectedMoney(tickectCost, numberOfPassengersTransported);
  driverPayment = calculateDriverPayment(recolectedMoney);
  totalMoneyCollectedAcum = (totalMoneyCollectedAcum + recolectedMoney);

  if (typeOfVehicule === 'Bus') {
    busesMoneyGeneratedAcum = (busesMoneyGeneratedAcum + recolectedMoney);
  }

  //Información en pantalla
  console.log(`Registro ${i}`);
  console.log(`Nombre del conductor: ${driverName}`);
  console.log(`Placa del vehiculo: ${vehiculePlate}`);
  console.log(`Tipo de vehiculo: ${typeOfVehicule}`);
  console.log(`Número de pasajeros transportados: ${numberOfPassengersTransported}`);
  console.log(`Costo del pasaje: ${tickectCost}$`);
  console.log(`Dinero recolectado durante la jornada: ${recolectedMoney}$`);
  console.log(`Pago correspondiente al conductor: ${driverPayment}$`);
  console.log(``);
  //

  recordsStatus = prompt(`Desea ingresar un nuevo registro?`).toLocaleLowerCase()
  if (recordsStatus === 'n' || recordsStatus === 'no') {
    break;
  };
  i += 1;
}

averageMicrobusesPassangers = calculateAverageMicrobusTransportedPassangers(microbusNumberOfPassengersAcum, totalMicrobuses);
percentageOfBusetas = calculatePercentageOfBusetas(numberOfBusetasRecordsAcum, i)




console.log(`Dinero total recolectado por la empresa durante la jornada: ${totalMoneyCollectedAcum}$`);
console.log(`Colectivos que transportaron a mas de 100 pasajeros: ${colectivosTransportedMoreThan100Passengers}`);
console.log(`Promedio de pasajeros transportados por los microbuses: ${averageMicrobusesPassangers}`);
console.log(`Dinero total recolectado por los buses: ${busesMoneyGeneratedAcum}$`);
console.log(`Porcentaje de busetas: ${percentageOfBusetas}`);

