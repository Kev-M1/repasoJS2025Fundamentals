/* 
Una flota de transporte presta sus servicios con diferentes tipos de vehiculos, al final de la jornada los vehiculos llegan al parqueadero y se elabora por cada vehículo un registro con la placa, el tipo de vehiculo (1= bus, 2= buseta, 3= colectivo), el número de pasajeros transportados, el dinero recolectado, y el pago que corresponde al conductor (20 % del total recolectado)
Costo de los pasajes:
- Bus: $2200
- Buseta: $ 2500
- Colectivos: $3500 
Elabore un algoritmo que permita realizar un registro para cada vehiculo ingresado al final de la jornada, dicho registro debe mostrar todos los datos anteriormente mencionados
*/

const calculateRecolectedMoney = function (tickectCost, numberOfPassengersTransported) {
  return (tickectCost * numberOfPassengersTransported)
}

const calculateDriverPayment = function (recolectedMoney) {
  return (recolectedMoney * (20 / 100))
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

const busTickectCost = 2200;
const busetaTickectCost = 2500;
const colectivoTickectCost = 3500;


recordsStatus = prompt('Desea ingresar un nuevo registro?').toLocaleLowerCase();
//El cilco muestra información progresivamente pero solo despues de recargar la pagina minimo una vez
while (recordsStatus === 's' || recordsStatus === 'si') {

  driverName = prompt(`Ingrese el nombre del conductor`);
  vehiculePlate = prompt(`Ingrese el número de placa del vehiculo`);
  numberOfPassengersTransported = parseInt(prompt(`Ingrese cuantos pasajeros transporto durante la jornada?`));
  typeOfVehicule = prompt('Que tipo de vehiculo maneja el conductor? (1= bus, 2=buseta, 3=colectivo)');

  switch (typeOfVehicule) {
    case '1':
      typeOfVehicule = 'Bus';
      tickectCost = busTickectCost;
      break;
    case '2':
      typeOfVehicule = 'Buseta';
      tickectCost = busetaTickectCost;
      break;
    case '3':
      typeOfVehicule = 'Colectivo';
      tickectCost = colectivoTickectCost;
      break;
  }

  recolectedMoney = calculateRecolectedMoney(tickectCost, numberOfPassengersTransported);
  driverPayment = calculateDriverPayment(recolectedMoney);

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



  i += 1;
  recordsStatus = prompt(`Desea ingresar un nuevo registro?`).toLocaleLowerCase();
}

