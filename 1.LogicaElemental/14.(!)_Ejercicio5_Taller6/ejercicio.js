/* 
Una empresa transportadora desea sistematizar la liquidación diaria de sus N vehículos, para ello, crea el siguiente registro por cada uno de ellos: 
REGISTRO
1. Placa 
2. Propietario 
3. Tipo de vehículo (1=colectivo, 2=microbús, 3=buseta, 4=bus) 
4. Número de pasajeros transportados 
5. Valor de cada pasaje. 

El administrador desea saber: 
1. Total recolectado por la empresa. 
2. Cuantos de los colectivos transportaron más de 100 pasajeros. 
3. Promedio de pasajeros transportados por los microbuses. 
4. Cuánto dinero recolectaron en total los buses. 
5. Porcentaje que representan las busetas respecto a todo el parque automotor de la empresa  
*/


//WORK-FLOW FUNCTION'S
function print(text) {
  document.write(text);
  document.write("</br>");
}

function lineBreak() {
  document.write("</br>");
  document.write("</br>");
}

function calculatePercentageOfBusetas(numberOfBusetas, totalCars) {
  return ((numberOfBusetas * 100) / totalCars);
}
//

print(`<h2>Transporte S.A.S AVANZADO</h2>`);

//Cost of Tickets
const busTicketCost = 2200;
const busetaTicketCost = 2500;
const colectivoTicketCost = 3500;
const microbusTicketCost = 2000;

let i = 0;
let ticketCost;
let vehicleType;
let vehiclePlate;
let driverName;
let numberOfPassengersTransported;
let moneyCollected;
let driverPay;
let companyAccumulatedMoney = 0;
let colectivosTransportedMoreThan100Passengers = 0;
let numberOfRegisteredMinibuses = 0;
let numberOfRegisteredBuses = 0;
let numberOfRegisteredColectivos = 0;
let numberOfRegisteredBusetas = 0;
let microbusAverageNumberOfPassengers;
let microbusNumberOfPassengersAcum = 0;
let totalMoneyCollectedByBuses = 0;
let totalMoneyCollectedByMinibuses = 0;
let totalMoneyCollectedByColectivos = 0;
let totalMoneyCollectedByBusetas = 0;
let percentageOfBusetas;
let recordVariable = (prompt(`Desea ingresar un nuevo registro?`)).toLowerCase();


//El cilco muestra información progresivamente pero solo despues de recargar la pagina minimo una vez
do {
  i += 1;
  console.log(i); //Por algun motivo sin este console.log no funciona el ciclo de forma progresiva
  vehicleType = (parseInt(prompt(`Seleccione el tipo de Vehiculo (1=colectivo, 2=microbús, 3=buseta, 4=bus)`)));
  while ((vehicleType < 1) || (vehicleType > 4)) {
    alert('ERROR!!, Ingrese una opción valida!')
    vehicleType = (parseInt(prompt(`Seleccione el tipo de Vehiculo (1=colectivo, 2=microbús, 3=buseta, 4=bus)`)));
  }
  switch (vehicleType) {
    case 1:
      vehicleType = 'Colectivo';
      ticketCost = colectivoTicketCost;
      numberOfRegisteredColectivos += 1;
      break;
    case 2:
      vehicleType = 'Microbus';
      ticketCost = microbusTicketCost;
      numberOfRegisteredMinibuses += 1;
      break;
    case 3:
      vehicleType = 'Buseta';
      ticketCost = busetaTicketCost;
      numberOfRegisteredBusetas += 1;
      break;
    case 4:
      vehicleType = 'Bus';
      ticketCost = busTicketCost;
      numberOfRegisteredBuses += 1;
      break;
  }

  driverName = prompt(`Ingrese el nombre del conductor`);
  vehiclePlate = prompt(`Ingrese la placa del vehiculo`);
  numberOfPassengersTransported = parseInt(prompt(`Cuantos pasajeros transporto el conductor durante la jornada?`));

  moneyCollected = (numberOfPassengersTransported * ticketCost);
  companyAccumulatedMoney = (companyAccumulatedMoney + moneyCollected);
  driverPay = (moneyCollected * (20 / 100));

  if (vehicleType == 'Colectivo' && numberOfPassengersTransported > 100) {
    colectivosTransportedMoreThan100Passengers += 1;
  }

  if (vehicleType == 'Colectivo') {
    totalMoneyCollectedByColectivos = (totalMoneyCollectedByColectivos + moneyCollected);
  }

  if (vehicleType == 'Microbus') {
    microbusNumberOfPassengersAcum = (microbusNumberOfPassengersAcum + numberOfPassengersTransported);
    totalMoneyCollectedByMinibuses = (totalMoneyCollectedByMinibuses + moneyCollected);

  }
  if (vehicleType == 'Bus') {
    totalMoneyCollectedByBuses = (totalMoneyCollectedByBuses + moneyCollected);
  }

  if (vehicleType == 'Buseta') {
    totalMoneyCollectedByBusetas = (totalMoneyCollectedByBusetas + moneyCollected);
  }

  print(`<strong>Registro #${i}</strong>`);
  print(`Nombre del Conductor: ${driverName}`);
  print(`Placa del Vehiculo: ${vehiclePlate}`);
  print(`Tipo de Vehiculo: ${vehicleType}`);
  print(`Costo del Pasaje: ${ticketCost}$`);
  print(`Numero de pasajeros transportados durante la jornada: ${numberOfPassengersTransported} Personas`);
  print(`Dinero recolectado durante la jornada: ${moneyCollected}$`);
  print(`Pago correspondiente al conductor (20% del total generado): ${driverPay}$`);
  lineBreak();

  console.log(`
        Registro #${i}
        Nombre del Conductor: ${driverName}
        Placa del Vehiculo: ${vehiclePlate}
        Tipo de Vehiculo: ${vehicleType}
        Costo del Pasaje: ${ticketCost}$
        Numero de pasajeros transportados durante la jornada: ${numberOfPassengersTransported} Personas
        Dinero recolectado durante la jornada: ${moneyCollected}$
        Pago correspondiente al conductor (20% del total generado): ${driverPay}$
        `);


  recordVariable = (prompt(`Desea ingresar un nuevo registro?`)).toLowerCase();
  if ((recordVariable == 'no') || (recordVariable == 'n')) {
    break;
  }
} while ((recordVariable == 'si') || (recordVariable == 's'));
console.log({ microbusNumberOfPassengersAcum });
console.log({ i });


averageNumberOfPassengersTransportedByMicrobus = ((microbusNumberOfPassengersAcum) / (numberOfRegisteredMinibuses));
percentageOfBusetas = calculatePercentageOfBusetas(numberOfRegisteredBusetas, i);

print(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - `);
//1. Total recolectado por la empresa
print(`Dinero total recolectado por la empresa: ${companyAccumulatedMoney}$`);

//2. Cuantos de los colectivos transportaron más de 100 pasajeros
print(`Colectivos que transportaron mas de 100 pasajeros: ${colectivosTransportedMoreThan100Passengers}`);

//3. Promedio de pasajeros transportados por los microbuses. 
print(`Promedio de pasajeros transportados por los microbuses: ${averageNumberOfPassengersTransportedByMicrobus} Pasajeros`);

//4. Dinero total recolectado por cada tipo de Vehiculo.
print(`<strong>Dinero Recolectado por cada tipo de Vehiculo</strong>`)
print(` Dinero total recolectado por los Buses: ${totalMoneyCollectedByBuses}$`);
print(` Dinero total recolectado por las Busetas: ${totalMoneyCollectedByBusetas}$`);
print(` Dinero total recolectado por los Microbuses: ${totalMoneyCollectedByMinibuses}$`);
print(` Dinero total recolectado por los Colectivos: ${totalMoneyCollectedByColectivos}$`);

//5. Porcentaje que representan las busetas respecto a todo el parque automotor de la empresa  
print(`Porcentaje que representan las busetas respecto a todo el parque automotor: ${percentageOfBusetas}%`);
print(`Busetas Registradas: ${numberOfRegisteredBusetas}`);
print(`Total de Vehiculos registrados: ${i}`);
