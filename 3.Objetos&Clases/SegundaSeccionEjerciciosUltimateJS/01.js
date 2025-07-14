//Crear una clase User que me permita crear objetos con los datos de los usuarios (Nombre y Id)

const { use } = require("react");

class User {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }
}

let user1 = new User('Jorge', 12345);
console.log(user1);