//1. Unificar ambos arrays para procesarlos en conjunto con la misma lógica (notese que el uno esta en español y el otro en ingles, primero debe abordarse ese problema), una vez realizado el paso anterior hacer lo siguiente:
//2. Ordenarlos de mayor a menor segun su Edad
//3. Obtener los Usuarios con plan de Pago
//
// const usuarios = [
//   { edad: 17, nombre: 'Nico', plan: 'premium' },
//   { edad: 13, nombre: 'Daniela', plan: 'free' },
//   { edad: 32, nombre: 'Juliana', plan: 'free' },
//   { edad: 32, nombre: 'Felipe', plan: 'gold' },
//   { edad: 25, nombre: 'Sara', plan: 'gold' },
// ]

// const users = [
//   { age: 16, name: 'Alfonso', membership: 'premium' },
//   { age: 22, name: 'Marco', membership: 'free' },
//   { age: 34, name: 'Melissa', membership: 'free' },
//   { age: 45, name: 'Lina', membership: 'gold' },
//   { age: 56, name: 'Carlos', membership: 'gold' },
// ]
//

const usuarios = [
  { edad: 17, nombre: 'Nico', plan: 'premium' },
  { edad: 13, nombre: 'Daniela', plan: 'free' },
  { edad: 32, nombre: 'Juliana', plan: 'free' },
  { edad: 32, nombre: 'Felipe', plan: 'gold' },
  { edad: 25, nombre: 'Sara', plan: 'gold' },
]

const users = [
  { age: 16, name: 'Alfonso', membership: 'premium' },
  { age: 22, name: 'Marco', membership: 'free' },
  { age: 34, name: 'Melissa', membership: 'free' },
  { age: 45, name: 'Lina', membership: 'gold' },
  { age: 56, name: 'Carlos', membership: 'gold' },
]


//1. Unificación de ambos arrays (ambos en INGLES)
usuarios.forEach(user => {
  user.age = user.edad;
  user.name = user.nombre;
  user.membership = user.plan;

  delete user.edad;
  delete user.nombre;
  delete user.plan;
});
// console.log(usuarios);

let newUsers = [];
newUsers = [...usuarios, ...users];
console.log(`1. Arrays unificados en un solo idioma`);
console.log(newUsers);


//2. Orden de Mayor a Menor según la edad
newUsers.sort((a, b) => b.age - a.age);
console.log(`2. Usuarios ordenados de Mayor a Menor según la edad`);
console.log(newUsers);

//3. Usuarios con plan de pago
let paidPlanUsers = [];
paidPlanUsers = newUsers.filter((user) => user.membership !== 'free')

console.log(`3. Usuarios que tienen un plan de pago`);
console.log(paidPlanUsers);




