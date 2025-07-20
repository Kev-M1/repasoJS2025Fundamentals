//Construir una función que permita saber si 2 objetos son identicos, osea que nos devuelva true si los objetos evaluados tienen las mismas propiedades con los mismos valores y false en caso de que no sea asi
// El objetivo de este ejercicio es construir una función que determine si dos objetos son "idénticos" a nivel superficial. Esto significa que la función debe devolver true si los objetos evaluados poseen las mismas propiedades con los mismos nombres y los mismos valores; de lo contrario, debe devolver false. Es importante recalcar que, en el alcance actual de este ejercicio, la función se limita a comparar objetos cuyas propiedades tienen valores primitivos (como cadenas de texto, números, booleanos, null o undefined). La comparación de objetos o arrays anidados (es decir, propiedades cuyos valores son a su vez otros objetos o arrays) requeriría técnicas de comparación más avanzadas, las cuales se abordarán en un tema posterior.

let literalObject1 = { name: 'Juan', id: 2314, location: 'Colombia', };
let literalObject2 = { name: 'Juan', id: 2314, location: 'Colombia', };



const checkIfObjectsAreIdentical = (obj1, obj2) => {
  //1. El primer paso para realizar esta comparación consiste en extraer los nombres de las propiedades (también conocidas como "claves" o "keys") de ambos objetos. Para ello, utilizamos el método estático Object.keys(obj). Este método devuelve un array que contiene las claves (nombres) de todas las propiedades propias y enumerables del objeto dado. Al usar Object.keys(), nos aseguramos de que cualquier operación posterior sobre las propiedades del objeto (como iteraciones o comparaciones) se realice exclusivamente sobre aquellas propiedades que están directamente definidas en el objeto y no sobre las que podría haber heredado de su cadena de prototipos. Esto es crucial para garantizar que nuestra comparación se enfoque únicamente en el contenido explícito y pertinente de cada objeto, en otras palabras evitamos que JS trabaje con cosas que estan en las sombras.

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);



  //2. Realizaremos las comparaciones para determinar si en efecto ambos objetos son identicos en todos los sentidos (Recordar que el alcance de este ejercicio no abarca situaciones en las que los objetos a comparar aniden otros onjetos dentro de si u otras estructuras de datos como arrays)

  // Posteriormente, procedemos a una iteración detallada sobre las propiedades para comparar tanto sus nombres como sus valores. Para ello, empleamos un bucle for...of que recorre los elementos del array de claves (keys1) obtenido previamente. La elección de for...of en este contexto es fundamental: a diferencia de for...in (que iteraría sobre todas las propiedades enumerables de un objeto, incluyendo las heredadas de su prototipo), for...of garantiza que las iteraciones se realicen únicamente sobre los elementos del array de claves, es decir, sobre los nombres de las propiedades propias y directamente definidas en el objeto. Esto nos permite un control preciso y evita comparaciones innecesarias o erróneas con información heredada.

  // Dentro de este bucle for...of, cada key (que es el nombre de una propiedad) se utiliza para acceder al valor correspondiente en ambos objetos (obj1[key] y obj2[key]). Esta técnica es muy potente, ya que el bucle for...of itera sobre los valores del array keys1 (que son los nombres de las propiedades como cadenas de texto). Luego, estos nombres se usan dinámicamente como índices para acceder a los valores específicos de las propiedades en los objetos originales, permitiendo una comparación directa de obj1[key] y obj2[key]. En primer lugar, se verifica si la propiedad con ese mismo nombre existe en el segundo objeto (obj2) utilizando obj2.hasOwnProperty(key), asegurando que no estamos comparando una propiedad que solo exista en uno de ellos. Finalmente, se comparan los valores de las propiedades. Si en cualquiera de estas etapas se encuentra una diferencia (ya sea que la propiedad no exista en el segundo objeto o que sus valores no coincidan), la función retorna false inmediatamente.



  let sameLength = true;
  let sameNames = true;
  let sameValues = true;

  if (keys1.length !== keys2.length) {
    sameLength = false;
    return false;
  }

  for (const arrayKeyElement of keys1) {

    if (!obj2.hasOwnProperty(arrayKeyElement)) {
      sameNames = false;
      return false;
    }

    if (obj1[arrayKeyElement] !== obj2[arrayKeyElement]) {
      sameValues = false;
      return false;
    }
    // En esta comparación estamos haciendo algo curioso, puede ser confuso ya que como sabemos para recorrer objetos lo normal es usar un bucle ForIn, pero en este caso estamos dentro de un bucle ForOf, ese bucle esta recorriendo un arrayKeyElement, y he aqui la novedad, el array en si contiene los nombres de las propiedades del objeto por lo tanto podremos recorrer tambien al objeto con el bucle ForOf gracias a esa particularidad
  }

  if (sameNames === true && sameValues === true && sameLength === true) {
    return true;
  } else {
    return false;
  }
};

const identicalObjects = checkIfObjectsAreIdentical(literalObject1, literalObject2);
console.log(identicalObjects);




