// Crear una clase User que me permita crear objetos con los datos de los usuarios (Nombre, Id, Genero, edad(esta debe ser privada)) y que tenga un metodo saludar() (este debe actuar de la misma forma para ambas clases) y otro metodo planInfo(), el cual actuara de forma particular para cada situación
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
    console.log(`Hola soy ${this.name} mi edad es ${this.#age}`);
  }

  planInfo() {
    console.log(`El usuario dispone del plan FREE`);
  }

  get getAge() {
    return this.#age;
  }

  set setAge(newValue) {
    if (isNaN(newValue)) {
      console.log('El valor de la edad debe ser un numero entero positivo');
    } else {
      this.#age = newValue;
    }
  }
}


const luisa = new User('Luisa', 3456456, 'F', 30);
console.log(luisa);

console.log(luisa.getAge);
luisa.setAge = 21;
console.log(luisa.getAge);


//Herencia
class UserPremium extends User {
  activeMembership;

  constructor(name, id, gender, age, activeMembership) {
    super(name, id, gender, age);
    this.activeMembership = activeMembership;
  }

  planInfo() {
    if (this.activeMembership === true) {
      console.log('El usuario dispone del plan PREMIUM');
    } else {
      super.planInfo();
    }
  }
}

const carlos = new UserPremium('Carlos', 12334, 'M', 22, false)
console.log(carlos);
carlos.setAge = 50;
console.log(carlos.getAge);

carlos.salute();
