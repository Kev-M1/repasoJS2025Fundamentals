//Crear una función que me muestre los usuarios de pago solamente y otra que me muestre la cantidad de usuarios suscrita a cada plan, osea que los clasifique por plan (los 3 grupos)
// const usuarios = [
//   { edad: 17, nombre: 'nico', plan: 'premium' },
//   { edad: 13, nombre: 'daniela', plan: 'free' },
//   { edad: 32, nombre: 'juliana', plan: 'free' },
//   { edad: 25, nombre: 'felipe', plan: 'gold' },
//   { edad: 25, nombre: 'sara', plan: 'gold' },
// ]

const users = [
  { edad: 17, nombre: 'nico', plan: 'premium' },
  { edad: 13, nombre: 'daniela', plan: 'free' },
  { edad: 32, nombre: 'juliana', plan: 'free' },
  { edad: 25, nombre: 'felipe', plan: 'gold' },
  { edad: 25, nombre: 'sara', plan: 'gold' },
]

const getPayingUsers = (inputArray) => {
  return inputArray.filter((user) => user.plan == 'premium' || user.plan == 'gold');
};
console.log(getPayingUsers(users));


const clasificateUsersByPlan = (inputArray) => {
  let premiumUsers = [];
  let freeUsers = [];
  let goldUsers = [];
  let classificationObject = {};
  for (const user of inputArray) {
    if (user.plan == 'premium') {
      premiumUsers.push(user);
    } else if (user.plan == 'gold') {
      goldUsers.push(user);
    } else if (user.plan == 'free') {
      freeUsers.push(user);
    }
  }
  classificationObject = {
    premiumUsers: premiumUsers,
    freeUsers: freeUsers,
    goldUsers: goldUsers,
  }
  return classificationObject
};
let clasification = clasificateUsersByPlan(users);
console.log({ clasification });