//1. Unificar ambos arrays para procesarlos en conjunto con la misma lógica (notese que el uno esta en español y el otro en ingles, primero debe abordarse ese problema), una vez realizado el paso anterior hacer lo siguiente:
//2. Ordenarlos de mayor a menor segun su Edad
//3. Obtener los Usuarios con plan de Pago
//4. Mostrar los usuarios suscritos a cada plan

//Trabajar cada punto usando funciones

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


//1. Unificación y normalización de Arrays en un solo idioma (Ingles)

//SOLUCIÓN CLASICA
// let usuariosCopy = usuarios.slice();

// usuariosCopy.forEach((user) => {
//   user.age = user.edad;
//   user.name = user.nombre;
//   user.membership = user.plan;

//   delete user.edad;
//   delete user.nombre;
//   delete user.plan;
// })

// const allUsers = [...users, ...usuariosCopy]
// console.log(allUsers);

//SOLUCIÓN USANDO CONCEPTOS DE JS MAS MODERNOS
const normalizeInEnglishAndConcatArrays = (inputArraySpanish, inputArrayEnglish) => {
  let traductionArray = inputArraySpanish.map((user) => {
    return {
      age: user.edad,
      name: user.nombre,
      membership: user.plan,
    }
  })

  return [...traductionArray, ...inputArrayEnglish]
};

const allUsers = normalizeInEnglishAndConcatArrays(usuarios, users);
console.log(allUsers);



//2. Orden de MAYOR a MENOR según la edad
const sortUsersFromOldestToYoungest = (inputArray) => {
  const allUsersCopy = inputArray.slice();
  return allUsersCopy.sort((b, a) => b.age - a.age)
};
const standarizedUsers = sortUsersFromOldestToYoungest(allUsers);
console.log(standarizedUsers);


//3. Obtener los usuarios con plan de pago
const getPaidUsers = (inputArray) => {
  return inputArray.filter((user) => user.membership !== 'free');
}

const paidUsers = getPaidUsers(standarizedUsers);
console.log(paidUsers);


//4. Mostrar los usuarios suscritos a cada plan
const classifyUsers = (inputArray) => {
  const freeUsers = inputArray.filter((user) => user.membership == 'free');
  const premiunUsers = inputArray.filter((user) => user.membership == 'premium');
  const goldUsers = inputArray.filter((user) => user.membership == 'gold');

  return {
    freeUsers, premiunUsers, goldUsers
  }
}

const classifiedUsers = classifyUsers(standarizedUsers);
console.log(classifiedUsers);
