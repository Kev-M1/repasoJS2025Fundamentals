//Construir una función que permita saber si el valor de 2 objetos es idéntico, osea que nos devuelva true si los objetos evaluados tienen las mismas propiedades con los mismos valores y false en caso de que no sea asi

let literalObject1 = { name: 'Juan', id: 2314, location: 'Colombia', };
let literalObject2 = { name: 'Juan', id: 2314, location: 'Colombia', };

let literalObject3 = { name: 'Jasduan', id: 2312314, location: 'Colasdombia', };




function comparePropertiesAndValues(obj1, obj2) {
  let equalKeyValuePairsAcum = 0;

  for (const key1 in obj1) {
    for (const key2 in obj2) {
      if ((key1 === key2) && (obj1[key1] === obj2[key2])) {
        equalKeyValuePairsAcum += 1;
      }
    }
  }

  if (equalKeyValuePairsAcum == Object.keys(obj1).length) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

comparePropertiesAndValues(literalObject1, literalObject2)