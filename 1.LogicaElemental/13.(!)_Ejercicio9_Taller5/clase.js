/* 
Una flota de transporte presta sus servicios con diferentes tipos de vehiculos, al final de la jornada los vehiculos llegan al parqueadero y se elabora por cada vehículo un registro con la placa, el tipo de vehiculo (1= bus, 2= buseta, 3= colectivo), el número de pasajeros transportados, el dinero recolectado, y el pago que corresponde al conductor (20 % del total recolectado)
Costo de los pasajes:
- Bus: $2200
- Buseta: $ 2500
- Colectivos: $3500 
Elabore un algoritmo que permita realizar un registro para cada vehiculo ingresado al final de la jornada, dicho registro debe mostrar todos los datos anteriormente mencionados
*/



function calculateDriverPayment(recolectedMoneyByDriver) {
    return (recolectedMoneyByDriver * (20 / 100));
}

function calculateRecolectedMoney(numberOfPassengersTransported, ticketCost) {
    return (numberOfPassengersTransported * ticketCost);
}


const busTicketCost = 2200;
const busetaTicketCost = 2500;
const colectivoTicketCost = 3500;
let driverName;
let ticketCost;
let vehiculePlate;
let typeOfVehicle;
let numberOfPassengersTransported;
let recolectedMoney;
let driverPayment;
let i = 1;


let newRecordControl = prompt(`Desea ingresar un nuevo registro?`).toLocaleLowerCase();




while (newRecordControl === 'si' || newRecordControl === 's') {
    console.log(i);
    driverName = prompt('Ingrese el nombre del conductor del vehiculo');
    vehiculePlate = prompt('Ingrese el número de placa del vehiculo');
    typeOfVehicle = parseInt(prompt('Tipo de vehiculo que conduce (1= bus, 2= buseta, 3= colectivo)'));
    if (typeOfVehicle === 1) {
        typeOfVehicle = 'bus';
        ticketCost = busTicketCost;
    } else if (typeOfVehicle === 2) {
        typeOfVehicle = 'buseta';
        ticketCost = busetaTicketCost;
    } else if (typeOfVehicle === 3) {
        typeOfVehicle = 'colectivo';
        ticketCost = colectivoTicketCost;
    }
    numberOfPassengersTransported = parseInt(prompt(`Cuantos pasajeros transporto durante la jornada?`));
    recolectedMoney = calculateRecolectedMoney(numberOfPassengersTransported, ticketCost);
    driverPayment = calculateDriverPayment(recolectedMoney);

    //Información en pantalla
    console.log(`Registro #${i}`);
    console.log(`Nombre del conductor: ${driverName}`);
    console.log(`Número de placa del vehiculo: ${vehiculePlate}`);
    console.log(`Tipo de vehiculo: ${typeOfVehicle}`);
    console.log(`Costo del pasaje: ${ticketCost}`);
    console.log(`Numero de pasajeros transportados en la jornada: ${numberOfPassengersTransported}`);
    console.log(`Dinero recolectado: ${recolectedMoney}`);
    console.log(`Valor del pago correspondiente al conductor: ${driverPayment}`);


    //Pregunta para saber si se desea ingresar mas registros
    newRecordControl = prompt(`Desea ingresar un nuevo registro?`).toLocaleLowerCase()
    if (newRecordControl === 'no' || newRecordControl === 'n') {
        alert('Registros completados con exito')
        break;
    }
    i += 1;
}