/* 
Una flota de transporte presta sus servicios con diferentes tipos de vehiculos, al final de la jornada los vehiculos llegan al parqueadero y se elabora por cada vehículo un registro con la placa, el tipo de vehiculo (1= bus, 2= buseta, 3= colectivo), el número de pasajeros transportados, el dinero recolectado, y el pago que corresponde al conductor (20 % del total recolectado)
Costo de los pasajes:
- Bus: $2200
- Buseta: $ 2500
- Colectivos: $3500 
Elabore un algoritmo que permita realizar un registro para cada vehiculo ingresado al final de la jornada, dicho registro debe mostrar todos los datos anteriormente mencionados
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
//

//Cost of Tickets
const busTicketCost = 2200;
const busetaTicketCost = 2500;
const colectivoTicketCost = 3500;

//Info on Screen
print(`<h2>Transporte S.A.S</h2>`);


let i = 0;
let ticketCost;
let vehicleType;
let vehiclePlate;
let driverName;
let numberOfPassengersTransported;
let moneyCollected;
let driverPay;
let recordVariable = (prompt(`Desea ingresar un nuevo registro?`)).toLowerCase();



//El cilco muestra información progresivamente pero solo despues de recargar la pagina minimo una vez
do {
    i += 1;
    console.log(i); //Por algun motivo sin este console.log no funciona el ciclo de forma progresiva
    vehicleType = (parseInt(prompt(`Seleccione el tipo de Vehiculo (1= Bus, 2= Buseta, 3= Colectivo)`)));
    while ((vehicleType < 1) || (vehicleType > 3)) {
        alert('ERROR!!, Ingrese una opción valida!')
        vehicleType = (parseInt(prompt(`Seleccione el tipo de Vehiculo (1= Bus, 2= Buseta, 3= Colectivo)`)));
    }
    switch (vehicleType) {
        case 1:
            vehicleType = 'Bus';
            ticketCost = busTicketCost;
            break;
        case 2:
            vehicleType = 'Buseta';
            ticketCost = busetaTicketCost;
            break;
        case 3:
            vehicleType = 'Colectivo';
            ticketCost = colectivoTicketCost;
            break;
    }

    driverName = prompt(`Ingrese el nombre del conductor`);
    vehiclePlate = prompt(`Ingrese la placa del vehiculo`);
    numberOfPassengersTransported = parseInt(prompt(`Cuantos pasajeros transporto el conductor durante la jornada?`));

    moneyCollected = (numberOfPassengersTransported * ticketCost);
    driverPay = (moneyCollected * (20 / 100));

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

