//Crear una función que me muestre los usuarios de pago solamente y otra que me muestre la cantidad de usuarios suscrita a cada plan (los 3 grupos)
// const usuarios = [
//   { edad: 17, nombre: 'nico', plan: 'premium' },
//   { edad: 13, nombre: 'daniela', plan: 'free' },
//   { edad: 32, nombre: 'juliana', plan: 'free' },
//   { edad: 25, nombre: 'felipe', plan: 'gold' },
//   { edad: 25, nombre: 'sara', plan: 'gold' },
// ]

const usuarios = [
  { edad: 17, nombre: 'nico', plan: 'premium' },
  { edad: 13, nombre: 'daniela', plan: 'free' },
  { edad: 32, nombre: 'juliana', plan: 'free' },
  { edad: 25, nombre: 'felipe', plan: 'gold' },
  { edad: 25, nombre: 'sara', plan: 'gold' },
]
console.log(usuarios);


function clasificateUsersByPlan(inputArray) {
  let premiumUsers = [];
  let goldUsers = [];
  let freeUsers = [];
  let clasification = {};

  premiumUsers = inputArray.filter((user) => user.plan == 'premium');
  goldUsers = inputArray.filter((user) => user.plan == 'gold');
  freeUsers = inputArray.filter((user) => user.plan == 'free');

  clasification = { freeUsers, premiumUsers, goldUsers };
  return clasification;
}


function getPaidUsers(inputArray) {
  let paidUsers = [];

  for (user of inputArray) {
    if ((user.plan === 'gold') || (user.plan === 'premium')) {
      paidUsers.push(user);
    }
  }
  return paidUsers
}

let result1 = clasificateUsersByPlan(usuarios);
let result2 = getPaidUsers(usuarios);

console.log(result1);
console.log(result2);


