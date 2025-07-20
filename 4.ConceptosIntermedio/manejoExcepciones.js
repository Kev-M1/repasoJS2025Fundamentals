//Crear una función que permita dividir 2 numeros, debe emplearse manejo de excepciones y validaciones para anticiparse a posibles errores


const divideTheNumbers = (numerator, denominator) => {
  if (typeof (numerator) !== 'number' || typeof (denominator) !== 'number') {
    throw new Error("Valores invalidos, ingrese un numero");
  }
  if (denominator === 0) {
    throw new Error("No es posible dividir entre 0");
  }
  return (numerator / denominator);
};



try {
  const result = divideTheNumbers(32123134, 23);
  console.log(result);
} catch (error) {
  console.log(error.message);
};




