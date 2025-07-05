//Crear una clase User que me permita crear objetos con los datos de los usuarios (Nombre y Id)


class User {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }
}


let user1 = new User('Carlos', 32345);
let user2 = new User('Roberto', 13142345);
console.log(user1);
console.log(user2);