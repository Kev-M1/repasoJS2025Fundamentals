//Crear una clase User que me permita crear objetos con los datos de los usuarios (Nombre y Id)


class User {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }
}

const user1 = new User('Andres', 235457);
const user2 = new User('Juliana', 345567);
console.log(user1);
console.log(user2);