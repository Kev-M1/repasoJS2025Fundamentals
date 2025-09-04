// Crear una clase User que me permita crear objetos con los datos de los usuarios (Nombre, Id, Genero, edad(esta debe ser privada)) y que tenga un metodo saludar()
// Luego una subclase que herede de esta y tenga una propiedad adicional



class User {
  name;
  id;
  gender;
  #age;

  constructor(name, id, gender, age) {
    this.name = name;
    this.id = id;
    this.gender = gender;
    this.#age = age;
  }

  salute() {
    console.log(`Hola, soy ${this.name} | id: ${this.id}, Genero: ${this.gender}.`);
  }

  get getAge() {
    return this.#age;
  }

  set setAge(newValue) {
    if (isNaN(newValue)) {
      console.log('La edad debe ser un valor numerico')
    } else {
      this.#age = newValue;
    }
  }


}

const maria = new User('Maria', 1232134, 'Femenino', 30);
console.log(maria);
maria.salute();
console.log(maria.getAge);
maria.setAge = 23;
console.log(maria);



class PremiumUser extends User {
  membership;


  constructor(membership, name, id, gender, age) {
    super(name, id, gender, age);
    this.membership = membership
  }
}



const jose = new PremiumUser('Premium', 'Jose', 123355, 'Masculino', 49)
console.log(jose);
jose.salute()


console.log(jose);

