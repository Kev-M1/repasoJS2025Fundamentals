/* 
Elabore un algoritmo que lea el nombre, el salario bruto, las deducciones y las bonificaciones de dos trabajadores, e imprima el nombre del que más salario neto tiene. 
Salario neto = Salario total que percibe el individuo           Salario Bruto = Salario antes de todas las bonificaciones o deducciones hechas segun el contrato del trabajador
*/


//Functions
const calculateNetSalary = function (grossSalary, bonus, deductions) {
    return (grossSalary + bonus - deductions);
}


//Datos trabajadores
//Trabajador 1
const worker1Name = prompt(`Ingrese el nombre del trabajador 1`);
const worker1GrossSalary = parseFloat(prompt(`Ingrese el salario bruto del trabajador 1`));
const worker1Deductions = parseFloat(prompt(`Ingrese el valor de las Deducciones realizadas al trabajador 1`));
const worker1Bonifications = parseFloat(prompt(`Ingrese el valor de las Bonificaciones realizadas al trabajador 1`));
const worker1NetSalary = calculateNetSalary(worker1GrossSalary, worker1Bonifications, worker1Deductions);

//Trabajador 2
const worker2Name = prompt(`Ingrese el nombre del trabajador 2`);
const worker2GrossSalary = parseFloat(prompt(`Ingrese el salario bruto del trabajador 2`));
const worker2Deductions = parseFloat(prompt(`Ingrese el valor de las Deducciones realizadas al trabajador 2`));
const worker2Bonifications = parseFloat(prompt(`Ingrese el valor de las Bonificaciones realizadas al trabajador 2`));
const worker2NetSalary = calculateNetSalary(worker2GrossSalary, worker2Bonifications, worker2Deductions);



//Mayor salario neto
let higherNetSalaryBetweenWorkers = null;
let workerWithHigherNetSalary = null;
if (worker1NetSalary > worker2NetSalary) {
    workerWithHigherNetSalary = worker1Name;
    higherNetSalaryBetweenWorkers = worker1NetSalary;
} else {
    workerWithHigherNetSalary = worker2Name;
    higherNetSalaryBetweenWorkers = worker2NetSalary;
};


//Información en pantalla

console.log(`Datos trabajadores`);
console.log(`Trabajador 1`);
console.log(`Nombre: ${worker1Name}`);
console.log(`Salario bruto: ${worker1GrossSalary}$`);
console.log(`Bonificaciones: ${worker1Bonifications}$`);
console.log(`Deducciones: ${worker1Deductions}$`);
console.log(`Salario neto: ${worker1NetSalary}$`);
console.log(``);
console.log(`Trabajador 2`);
console.log(`Nombre: ${worker2Name}`);
console.log(`Salario bruto: ${worker2GrossSalary}$`);
console.log(`Bonificaciones: ${worker2Bonifications}$`);
console.log(`Deducciones: ${worker2Deductions}$`);
console.log(`Salario neto: ${worker2NetSalary}$`);
console.log(``);
console.log(`Salario neto mas alto: ${higherNetSalaryBetweenWorkers}$, corresponde a ${workerWithHigherNetSalary}`);