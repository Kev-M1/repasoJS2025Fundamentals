/* 
CREAR UN PROGRAMA QUE LE PERMITA AL USUARIO CALCULAR LA TABLA DE MULTIPLICAR DE CUALQUIER NUMERO HASTA EL MULTIPLO QUE DESEE DE LA FORMA MAS EFICIENTE POSIBLE
*/



const baseNumber = parseInt(prompt(`Ingrese el número del cual desea calcular las tablas de multiplicar`));
const limitNumber = parseInt(prompt(`Hasta que multiplo desea realizar los calculos?`));




let i;
let resultOperation;


//Usando WHILE
/* 
i = 0;
while (i <= limitNumber) {
  resultOperation = (baseNumber * i);
  console.log(`${baseNumber} * ${i} = ${resultOperation}`);
  i += 1;
} */


//Usando FOR
for (i = 0; i <= limitNumber; i++) {
  resultOperation = (baseNumber * i);
  console.log(`${baseNumber} * ${i} = ${resultOperation}`);
}