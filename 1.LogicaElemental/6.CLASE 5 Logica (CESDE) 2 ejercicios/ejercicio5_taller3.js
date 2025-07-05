/* 
Crear un algoritmo que le permita al usuario conocer cual es su salario neto luego de ingresar el tipo de contrato que suscribe con la empresa
(FIJO o TEMPORAL).

Si el contrato es FIJO el programa debe leer el nombre, el número de horas trabajadas, el salario básico hora, el total de deducciones y el total de bonificaciones  
y si es TEMPORAL solo debe leer el nombre y el número de horas trabajadas; estos trabajadores tienen un salario básico hora de $6.000 y no tienen deducciones ni bonificaciones.
 */


//Functions
const calculateNetSalary = function (numberOfHoursWorked, hourlyWage, bonifications, deductions) {
    return ((numberOfHoursWorked * hourlyWage) + bonifications - deductions);
}

let workerName;
let numberOfHoursWorked;
let hourlyWage;
let temporalWorkerHourlyWage = 6000;
let workerDeductions;
let workerBonifications;
let typeOfContract;
let grossSalary;

typeOfContract = parseInt(prompt(`Que tipo de contrato suscribe con la empresa? Fijo(1) o Temporal(2)`));

if (typeOfContract === 1) {
    typeOfContract = 'Fijo';
    workerName = prompt(`Ingrese el nombre del trabajador`);
    numberOfHoursWorked = parseFloat(prompt(`Ingrese el numero de horas trabajadas en el mes`));
    hourlyWage = parseFloat(prompt(`Ingrese el salario basico por hora`));
    workerDeductions = parseFloat(prompt(`Ingrese el valor de las Deducciones realizadas al trabajador`));
    workerBonifications = parseFloat(prompt(`Ingrese el valor de las Bonificaciones realizadas al trabajador`));
} else if (typeOfContract === 2) {
    typeOfContract = 'Temporal';
    workerName = prompt(`Ingrese el nombre del trabajador`);
    numberOfHoursWorked = parseFloat(prompt(`Ingrese el numero de horas trabajadas en el mes`));
    hourlyWage = temporalWorkerHourlyWage;
    workerDeductions = 0;
    workerBonifications = 0;
}

netSalary = calculateNetSalary(numberOfHoursWorked, hourlyWage, workerBonifications, workerDeductions);


//Información en pantalla
console.log(`Tipo de contrato del trabajador: ${typeOfContract}`);
console.log(`Nombre del trabajador: ${workerName}`);
console.log(`Horas trabajadas en el mes: ${numberOfHoursWorked}`);
console.log(`Salario basico hora: ${hourlyWage}$`);
console.log(`Bonificaciones: ${workerBonifications}$`);
console.log(`Deducciones: ${workerDeductions}$`);
console.log(`Salario neto: ${netSalary}$`);